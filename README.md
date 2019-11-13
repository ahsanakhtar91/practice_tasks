# Practice Tasks

A repository for a few of my recent sample coding practice tasks

It currently includes 2 of my practice tasks:

---------------------------
1) Fluid WebPage (ClipMine)
---------------------------

A static web page created with emphasis on fluid design, created using HTML, CSS Grids, Flexbox

------------------------
2) Notebooks App (React)
------------------------

A sample app demonstrating the use of ReactJS, JavaScript, JSX, HTML, CSS, MaterialUI, Webpack, React Router, etc. on Front End and an API
written in NodeJS on Back End. Core functionalities of this App:
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
- Finally, run the ReactJS Application by running the command <code>yarn start</code> OR <code>npm start</code> on the root directory.
- Access the app by using secure protocol: <code>https://localhost:8080</code>
