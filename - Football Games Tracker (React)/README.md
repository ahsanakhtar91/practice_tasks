------------------------------
Football Games Tracker (React)

------------------------------

<code>**Live Demo**: https://football-games.netlify.app</code>

A responsive web app with a nice looking UI, built on mobile-first approach (suitable for all device sizes), which acts as Football Games Viewer/Tracker, built in **React** and **TypeScript** using **React Hooks**, **Redux**, **Redux Thunk**, **SCSS**, **Media Queries**, **Flexbox**, Babel, Webpack, etc. Core functionalities of this App:
- An eye catching mobile-friendly page thats lists football games (suitable for viewing on all notebooks, desktops, tablets and mobile phones).
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
