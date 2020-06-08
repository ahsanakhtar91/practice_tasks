# Practice Tasks

A repository for a few of my recent sample coding practice tasks

It currently includes 5 of my practice tasks:

---------------------------
1) Fluid WebPage (ClipMine)
---------------------------

A static web page created with emphasis on fluid design, created using HTML, CSS Grids, Flexbox

------------------------
2) Notebooks App (React)
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
3) Redux App
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
4) Redux App (Immer)
--------------------

A copy of <code>Redux App</code> (App # 3), but with many additional technical implementations like:
- Added <code>Immer Reducer</code> and managed the same running flow of App using Immer Reducer, React, Redux, Redux Saga, etc.
- Refoctoring of App's code with all new folder structure (will be beneficial in future if App needs scaling OR additional features).

Steps to run the Redux App (Immer):
- Same as App # 3

----------------------------
5) Product Items App (React)
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
6) Registration Form (React)
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
