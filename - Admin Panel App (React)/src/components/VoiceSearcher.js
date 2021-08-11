import React from "react";
import recordIcon from "../icons/record.svg";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { viewSearchedClient } from "../redux/actions/actionCreators";
import { Spin } from "antd";

export default function VoiceSearcher(props) {
    const {
        interimTranscript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const startRecordingVoiceTranscript = () => {
        SpeechRecognition.startListening({ continuous: true });
    };

    const stopRecordingVoiceTranscript = () => {
        const searchedText = interimTranscript;
        SpeechRecognition.stopListening();
        resetTranscript();

        props.dispatch(viewSearchedClient(searchedText.trim()));
    };

    return (
        (browserSupportsSpeechRecognition) ?
            <div className="voice-searcher">
                {listening && interimTranscript.trim() &&
                    <div className="voice-transcript click-impression" onClick={stopRecordingVoiceTranscript}>
                        {interimTranscript}
                    </div>
                }
                {listening &&
                    <Spin size="small" style={{ marginRight: "5px" }} />
                }
                <img
                    className="record-icon click-impression"
                    src={recordIcon}
                    title="Search by saying the store name..."
                    onClick={(!listening) ? startRecordingVoiceTranscript : stopRecordingVoiceTranscript}
                    style={{ transform: `scale(${listening ? "1.5" : "1"})` }}
                />
            </div>
            :
            <></>
    );
}