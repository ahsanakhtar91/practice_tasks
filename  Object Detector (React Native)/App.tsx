import "@tensorflow/tfjs-react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as tf from "@tensorflow/tfjs";
import * as tfRN from "@tensorflow/tfjs-react-native";
import * as mobilenet from "@tensorflow-models/mobilenet";
import { Camera, CameraApi, CameraType } from "react-native-camera-kit";
import { FileSystem } from "react-native-unimodules";
import RNFS from "react-native-fs";
import ImagePicker from "react-native-image-crop-picker";

function App(): React.JSX.Element {
  const cameraRef = useRef<CameraApi>(null);

  const [cameraVisible, setCameraVisible] = useState(false);
  const [cameraType, setCameraType] = useState<CameraType>(CameraType.Front);

  const [imageUri, setImageUri] = useState<string | null>(null);

  const [model, setModel] = useState<mobilenet.MobileNet | null>(null);
  const [detections, setDetections] = useState<
    {
      className: string;
      probability: number;
    }[]
  >([]);

  useEffect(() => {
    (async () => {
      await tf.ready();

      mobilenet
        .load({ version: 2, alpha: 0.75 })
        .then((loadedModel) => {
          console.log("loadedModel", loadedModel);
          setModel(loadedModel);
        })
        .catch((error) => {
          console.log("Error in loading model", error);
        });
    })();
  }, []);

  const convertImageToTensor = async (uri: string, fromCamera: boolean) => {
    let imageUri = "";
    if (fromCamera) {
      const urlComponents = uri.split("/");
      const fileNameAndExtension = urlComponents[urlComponents.length - 1];
      const destPath = `${RNFS.TemporaryDirectoryPath}/${fileNameAndExtension}`;
      await RNFS.copyFile(uri, destPath);
      imageUri = "file://" + destPath;
    } else {
      imageUri = uri;
    }

    console.log("fromCamera", fromCamera);
    console.log("imageUri", imageUri);
    const imgB64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    const imgBuffer = tf.util.encodeString(imgB64, "base64");
    const raw = Uint8Array.from(imgBuffer);
    console.log("decodingJpeg");
    const imageTensor = tfRN.decodeJpeg(raw);
    console.log("imageTensor", imageTensor);

    return imageTensor;
  };

  const handleCapture = async (image: { uri: string }, fromCamera: boolean) => {
    setImageUri(image.uri);

    if (model) {
      const tensor = await convertImageToTensor(image.uri, fromCamera);
      const detections = await model.classify(tensor, 4);
      console.log("Detections:", detections);
      if (detections && detections.length > 0) {
        setDetections(detections);
      }
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      {cameraVisible ? (
        imageUri ? (
          <>
            <View style={{ opacity: detections.length === 0 ? 0.6 : 1 }}>
              <TouchableOpacity
                style={styles.button}
                disabled={detections.length === 0}
                onPress={() => {
                  if (detections.length !== 0) {
                    setImageUri(null);
                    setDetections([]);
                  }
                }}
              >
                {detections.length === 0 ? (
                  <View style={styles.row}>
                    <ActivityIndicator
                      color="white"
                      style={{ marginRight: 10 }}
                    />
                    <Text style={styles.buttonText}>
                      Detecting Objects from the image
                    </Text>
                  </View>
                ) : (
                  <Text style={styles.buttonText}>Go Back</Text>
                )}
              </TouchableOpacity>
            </View>
            {detections.length > 0 && (
              <View style={styles.detectionsArea}>
                {detections.map(({ className, probability }, i) => (
                  <View style={styles.detections} key={i}>
                    <Text style={styles.detectionsLeft}>{className}</Text>
                    <Text style={styles.detectionsRight}>
                      {probability.toFixed(3)}
                    </Text>
                  </View>
                ))}
              </View>
            )}
            <Image source={{ uri: imageUri }} style={{ flex: 1 }} />
          </>
        ) : (
          <>
            <Camera
              ref={cameraRef}
              style={{ flex: 1 }}
              cameraType={cameraType}
              flashMode="auto"
            />
            <TouchableOpacity
              style={styles.pickFromGalleryButton}
              onPress={() =>
                ImagePicker.openPicker({
                  width: 300,
                  height: 400,
                  cropping: true,
                  multiple: false,
                }).then((image) => {
                  if (!Array.isArray(image)) {
                    handleCapture({ uri: image.path }, false);
                  }
                })
              }
            >
              <Text style={{ ...styles.buttonIcon, fontSize: 18 }}>🖼️</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.captureButton}
              onPress={async () => {
                const image = await cameraRef.current?.capture();
                image?.uri && handleCapture(image, true);
              }}
            />
            <TouchableOpacity
              style={styles.flipTypeButton}
              onPress={() =>
                setCameraType((t) =>
                  t === CameraType.Back ? CameraType.Front : CameraType.Back
                )
              }
            >
              <Text style={{ ...styles.buttonIcon, fontSize: 26 }}>↻</Text>
            </TouchableOpacity>
          </>
        )
      ) : (
        <View style={{ opacity: model === null ? 0.6 : 1 }}>
          <TouchableOpacity
            style={styles.button}
            disabled={model === null}
            onPress={() => model !== null && setCameraVisible(true)}
          >
            {model === null ? (
              <View style={styles.row}>
                <ActivityIndicator color="white" style={{ marginRight: 10 }} />
                <Text style={styles.buttonText}>
                  Loading TFJS mobilenet_v2 Model
                </Text>
              </View>
            ) : (
              <Text style={styles.buttonText}>Open Camera</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles: StyleSheet.NamedStyles<any> = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ababab",
  },
  row: {
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    height: 50,
    width: "100%",
    backgroundColor: "#7359be",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  buttonIcon: {
    color: "#000000",
    fontSize: 26,
    fontWeight: "600",
  },
  captureButton: {
    height: 70,
    width: 70,
    backgroundColor: "#ffffff",
    borderColor: "#555",
    borderWidth: 5,
    borderRadius: 35,
    position: "absolute",
    bottom: 40,
    left: Dimensions.get("window").width / 2 - 35,
  },
  flipTypeButton: {
    height: 40,
    width: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 20,
    position: "absolute",
    bottom: 50,
    left: Dimensions.get("window").width / 2 + 80,
  },
  pickFromGalleryButton: {
    height: 40,
    width: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    position: "absolute",
    bottom: 50,
    left: Dimensions.get("window").width / 2 - 120,
  },
  detectionsArea: {
    backgroundColor: "#333333",
    borderColor: "#7359be",
    borderWidth: 2,
  },
  detections: {
    flexDirection: "row",
    borderColor: "#7359be",
    borderBottomWidth: 2,
    paddingHorizontal: 6,
    paddingVertical: 2
  },
  detectionsLeft: {
    flex: 1,
    color: "#7359be",
    fontWeight: "bold",
    fontSize: 16,
  },
  detectionsRight: {
    color: "#7359be",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default App;
