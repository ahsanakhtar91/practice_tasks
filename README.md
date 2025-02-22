# Practice Tasks

A repository for a few of my recent practice apps that I like to develop as fun in my free time.

It currently includes total **13** of my practice tasks:

------------------------------------
1) Object Detector (React Native)
------------------------------------

A small example app in **React Native**, related to <code>**AI**</code> and <code>**Machine Learning**</code>. 

Built using **React Native CLI** / **TypeScript**.

#### :video_camera: <code>**Live Demo**: https://jumpshare.com/s/MbKCGBDost6kEcPzDFfw</code>

The features of this app are:
* It detects objects from the images on _Android_, either captured by **camera** (front/back) or picked from the **gallery** on the mobile device.
* After detection is successful, it shows a list of detected objects (up to 4) along with their probabilities.

## Packages:

* Object Detection happens with **TensorFlow**'s `mobilenet_v2` ML model (using [@tensorflow/tfjs-react-native](https://www.npmjs.com/package/@tensorflow/tfjs-react-native) and [@tensorflow-models/mobilenet](https://www.npmjs.com/package/@tensorflow-models/mobilenet)).
* [react-native-camera-kit](https://www.npmjs.com/package/react-native-camera-kit) is used for capturing images with camera (front/back).
* [react-native-image-crop-picker](https://www.npmjs.com/package/react-native-image-crop-picker) is used for picking images from the gallery (can crop if needed).

## Steps to run

```bash
# Install Packages
$ yarn

# Start Metro
$ yarn start --reset-cache

# Run on Android (only Android is configured in this project).
$ yarn android
```

**Tested on**: Xiaomi Redmi Note 10S

------------------------------------
2) Video Frame Picker (React Native)
------------------------------------

**Live Demo** video is attached below!

This is an example **React Native** application in which a **picker/scrubber component** is created that allows to select a frame from a video by scrubbing/swiping through all of the image frames of the video, which is similar to the cover frame picker screen in **Instagram** which appears while uploading a video and asks you to select an image from the video to be treated as the cover/thumbnail of the video. 

So, the **Video Frame Picker** is built as a clone of that screen. The technologies used to build this app are **React Native**, **TypeScript**, **Expo**, **XCode**, **React Hooks**, etc. This app is specifically tested on **iOS** and the most highlighted library used to build it is **[react-native-ffmpeg](https://www.npmjs.com/package/react-native-ffmpeg)**. The features of this app are:  

- All of the frames from a sample **mp4** video start getting extracted upon launching the app to be later used in the **VideoFramesSrcubber** component.
- A **loader** screen is shown only, until all the frames are extracted and the app is ready to proceed further to the main screen.
- Upon successful extraction, the main screen appears containing a **scrubber component** at the bottom (a **swipeable bar** that navigates through all of the frames).
- The main screen also has a **preview** component that shows the **selected frame** at the top, it keeps showing the preview of the frame selected through scrubbing/swiping.
- The preview is also shown in a small frame inside the scrubber/swipeable bar component at the bottom too.
- So, by horizontally swiping/scrubbing the small frame present in the scrubber component (using left-to-right and right-to-left finger gestures on scrubber component), the frames/images from the video are previewed along the way. In the end, the frame/image in the preview area is going to be the selected frame.
- A Live Demo video is attached below to show how this app works.

<code>**Live Demo**: https://www.loom.com/share/aa0eb589ae654ec8abefb22ababd5c6a</code>

Steps to run the Video Frame Picker (React Native) App:
- Get your React Native development environment ready, following the docs [here](https://reactnative.dev/docs/environment-setup) (skip if already done).
- Run command <code>yarn install</code> on the root directory of Video Frame Picker (React Native) App to install the node packages.
- This example app is specifically tested on iOS, so make sure your iOS setup for React Native is ready (including XCode, CocoaPods, Simulator, etc.). 
- After that, open up the Terminal (**macOS**).
- Run <code>cd ios</code> on the root directory of the project folder.
- Run <code>pod install</code>
- Run <code>open videoframepickerreactnative.xcworkspace</code>
- **XCode** will open. 
- Build the application in XCode (using **Build** option in **Product** menu).
- Return back to Terminal.
- Run <code>cd ..</code> (to move back to root directory).
- Run the App by running the command <code>expo start --dev-client -c</code> on the root directory.
- If all goes well, you will see the app running in your iOS Simulator.

--------------------------
3) Admin Panel App (React)
--------------------------

<code>**Live Demo**: https://the-admin-panel.netlify.app</code>

A vibrant, elegant and user-friendly web app, which acts as an Admin Panel, built in **React** using **React Hooks**, **Redux**, **Ant Design**, **React Router**, **SCSS**, Babel, Webpack, etc. Core functionalities of this App:
- A nice looking design with professional design elements (**Header**, **Drawer Menu**, **Side Menu** and **Content**).
- Managing (Creating, Viewing, Searching, Editing and Deleting) the clients. 
- Storing and Maintaining the clients inside **Redux Store** as well as in **localStorage** with every update (so that the client data persists even after reloading).
- Loading **mock data** from a json file initially into **Redux Store** as well as in **localStorage**.
- Viewing all the clients **alphabetically sorted** (by their **id**) in ascending order.
- **Pagination** support (**5** clients per page) implemented to keep the clients list/table compact.
- Searching the clients **by typing** the name.
- Searching the clients **by voice** (implemented **voice search** feature).
- **Adding** a new client.
- **Viewing** an existing client.
- **Editing** an existing client.
- While adding or editing a client, the data input is taken into form that appears inside a nice looking **modal popup**.
- **Form validations** are properly implemented on adding/editing form.
- **Deleting** a client.
- **Exporting** all of the existing clients to Excel format (**CSV**).

<code>**Live Demo**: https://the-admin-panel.netlify.app</code>

Steps to run the Admin Panel App:
- Run command <code>yarn install</code> on the root directory of Admin Panel App to install the node packages.
- Run the App by running the command <code>yarn start</code> on the root directory.
- Access the app in your browser with: <code>http://localhost:3000</code>

---------------------------------
4) Football Games Tracker (React)
---------------------------------

<code>**Live Demo**: https://football-games.netlify.app</code>

A responsive web app with a nice looking UI, built on mobile-first approach (suitable for all device sizes), which acts as Football Games Viewer/Tracker, built in **React** and **TypeScript** using **React Hooks**, **Redux**, **Redux Thunk**, **SCSS**, **Media Queries**, **Flexbox**, Babel, Webpack, etc. Core functionalities of this App:
- An eye catching mobile-friendly page that lists the football games (suitable for viewing on all notebooks, desktops, tablets and mobile phones).
- A **Live API** with **authorization** integrated that fetches the results of ongoing, upcoming and past football game fixtures. 
- Code is refactored and written using **TypeScript interfaces** to make it as **strictly typed** as possible.
- All the games/fixtures shown as a list of responsive mobile-friendly **Cards** using **Flexbox** and  **Media Queries**.
- Implemented the functionality to mark any of the games as your **Favourite**, and the ability to view all those later based on the Favourites filter.
- All the games marked as **Favourites**, are stored and maintained in **localStorage** after marking as Favourite (so that the data persists even after reloading).
- Implemented **Filters** upon the results of the football games on UI, based upon **3** different **filtering options**, which are: **Show All**, **Favourites** and **Live Games**.
- Storing the full games list inside the **Redux Store** after fetching from the API (to avoid **props drilling** and for easy **sharing** between components at different levels).
- **Lazy Loading** functionality implemented to avoid performance issues (**30** games loaded initially, and then the user can keep pressing **Load More** button provided at the bottom of the results, until the available **total count** limit is reached and all the results are successfully viewed).

<code>**Live Demo**: https://football-games.netlify.app</code>

Steps to run the Football Games Tracker App:
- Run command <code>yarn install</code> on the root directory of Football Games Tracker App to install the node packages.
- Run the App by running the command <code>yarn start</code> on the root directory.
- Access the app in your browser with: <code>http://localhost:3000</code>

------------------------
5) Users Manager (React)
------------------------

<code>**Live Demo**: https://users-manager-react.netlify.app</code>

A user-friendly and easy to use web app built in **React** using **React Hooks**, **Redux**, **Ant Design**, **React Router**, **SCSS**, Babel, Webpack, etc. Core functionalities of this App:
- Managing (Creating, Viewing, Searching, Editing and Deleting) the users. 
- Storing and Maintaining the users inside **Redux Store** as well as in **localStorage** with every update (so that the user data persists even after reloading).
- Loading **mock data** from a json file initially into **Redux Store** as well as in **localStorage**.
- Viewing all the users **alphabetically sorted** (by their **name**) ordered as (A-Z).
- **Pagination** support (**5** users per page) implemented to keep the users list/table compact.
- Searching the users **by typing** the name.
- Searching the users **by voice** (implemented **voice search** feature).
- **Adding** a new user.
- **Editing** an existing user.
- While adding or editing a user, the required data of the user in the form is: **name**, **email**, **city**, **companyName**.
- **Form validations** are properly implemented on adding/editing form.
- **Deleting** a user.
- **Exporting** all of the existing users to Excel format (**CSV**).

<code>**Live Demo**: https://users-manager-react.netlify.app</code>

Steps to run the Users Manager:
- Run command <code>yarn install</code> on the root directory of Users Manager App to install the node packages.
- Run the App by running the command <code>yarn start</code> on the root directory.
- Access the app in your browser with: <code>http://localhost:3000</code>

---------------------------
6) Variable Counter (React)
---------------------------

A small sample Counter app, which I created while doing a Live Coding Challenge, built in **React** and **TypeScript** using **React Hooks**, **CSS**, Babel, Webpack, etc. Scope of this App:
- A **Counter** component.
- Maintaining the existing count in state and **Viewing** it on the top.
- **Adding** and **Subtracting** to the current count using the steps of **1** and **5**.
- Maintaining and showing the **History** of all the actions performed upon the counter after every state update.
- Evaluating and showing the **Maximum Number** from the **History** after every state update.

Steps to run the Variable Counter App:
- Run command <code>yarn install</code> on the root directory of Variable Counter App to install the node packages.
- Run the App by running the command <code>yarn start</code> on the root directory.
- Access the app in your browser with: <code>http://localhost:3000</code>

---------------------------
7) Fluid WebPage (ClipMine)
---------------------------

A static web page created with emphasis on fluid design, created using HTML, CSS Grids, Flexbox

------------------------
8) Notebooks App (React)
------------------------

A sample app demonstrating the use of ReactJS, JavaScript, JSX, HTML, CSS, MaterialUI, Webpack, React Router, etc. on Front End and an API written in NodeJS on Back End. Core functionalities of this App:
- Authorizing GitHub User using OAuth Access Token and, hence, creating user session in the app.
- Creating Notebooks (Gists) using the user credentials (access token)
- Creating Notes (Gist Files) using the user credentials (access token)
- Viewing Notes
- Editing Notes
- Deleting Notebooks

Steps to run the Notebooks App:
- Run command <code>yarn install</code> OR <code>npm install</code> on the root directory of Notebooks App to install the node packages.
- Now run Node Server as it contains API to get the GitHub Access Tokens on Backend. Use command:<br>
<code>node node-server.js</code>
- Finally, run the App by running the command <code>yarn start</code> OR <code>npm start</code> on the root directory.
- Access the app by using secure protocol: <code>https://localhost:8080</code>

------------
9) Redux App
------------

A Sample Practice App involving the use of React, Redux, Redux Saga, React Router, AntDesign, etc. Core functionalities of this App:
- Creating inventory items with user input.
- Viewing inventory items in a Table.
- Deleting inventory items.

Steps to run the Redux App:
- Run command <code>yarn install</code> OR <code>npm install</code> on the root directory of Redux App to install the node packages.
- Run the App by running the command <code>yarn start</code> OR <code>npm start</code> on the root directory.
- Access the app in your browser with: <code>http://localhost:8080</code>

--------------------
10) Redux App (Immer)
--------------------

A copy of <code>Redux App</code> (App # 3), but with many additional technical implementations like:
- Added <code>Immer Reducer</code> and managed the same running flow of App using Immer Reducer, React, Redux, Redux Saga, etc.
- Refoctoring of App's code with all new folder structure (will be beneficial in future if App needs scaling OR additional features).

Steps to run the Redux App (Immer):
- Same as App # 3

----------------------------
11) Product Items App (React)
----------------------------

A Products List & Cart App implemented using React, Redux, Ant Design, Reducers, Redux Saga, React Router, LESS, Babel, Webpack, etc. Core functionalities of this App:
- Fetching Products from an API and then Viewing that Products List.
- Filtering Products on the basis of Colour.
- Adding Products to Cart.
- Viewing Cart Items individually.
- Changing (Incrementing/Decrementing) Product Quantities in Cart. 
- Maintaining Stock of Products and handling all relevant use cases while adding or removing Products in Cart.
- Deleting Products from Cart.
- Maintaining and Showing Total Items and the Total Price below the Cart.

Steps to run the Product Items App:
- Run command <code>yarn install</code> OR <code>npm install</code> on the root directory of Product Items App to install the node packages.
- Run the App by running the command <code>yarn start</code> OR <code>npm start</code> on the root directory.
- Access the app in your browser with: <code>http://localhost:3000</code>

----------------------------
12) Registration Form (React)
----------------------------

A sample Registration Form implemented in React using React Hooks, MaterialUI, React Router, Babel, Webpack, etc. Core functionalities of this App:
- Routing to a Registration Form
- Rendering a sample Registration Form with various fields (First Name, Last Name, Email, Password and DOB)
- Adding relevant validations upon all the fields and showing all the error messages on UI in a presentable way.
- Submitting the form only when all validations are passed on all fields.

Steps to run the Registration Form:
- Run command <code>yarn install</code> OR <code>npm install</code> on the root directory of Registration Form App to install the node packages.
- Run the App by running the command <code>yarn start</code> OR <code>npm start</code> on the root directory.
- Access the app in your browser with: <code>http://localhost:8080</code>

----------------------------
13) Timeline Form (React)
----------------------------

A sample Timeline Form implemented in React using React Hooks, MaterialUI, React Router, Babel, Webpack, etc. Core functionalities of this App:
- Routing to a Timeline Form
- Rendering a sample vertical Timeline Form with various multiline fields having a vertical line and circles alongside (on the left).
- When the focus is moved to next field on timeline, it reflects changes on the UI (by tick marking the previous timeline field and highlighting the next one).
- Submitting the form and showing a toast about it.

Steps to run the Timeline Form:
- Run command <code>yarn install</code> OR <code>npm install</code> on the root directory of Timeline Form App to install the node packages.
- Run the App by running the command <code>yarn start</code> OR <code>npm start</code> on the root directory.
- Access the app in your browser with: <code>http://localhost:3000</code>
