# Practice Tasks

A repository for a few of my recent sample coding practice tasks

It currently includes total **9** of my practice tasks:

--------------------------
1) Admin Panel App (React)
--------------------------

<code>**Live Demo**: </code>

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

<code>**Live Demo**: </code>

Steps to run the Admin Panel App:
- Run command <code>yarn install</code> on the root directory of Admin Panel App to install the node packages.
- Run the App by running the command <code>yarn start</code> on the root directory.
- Access the app in your browser with: <code>http://localhost:3000</code>

------------------------
2) Users Manager (React)
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
3) Fluid WebPage (ClipMine)
---------------------------

A static web page created with emphasis on fluid design, created using HTML, CSS Grids, Flexbox

------------------------
4) Notebooks App (React)
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
5) Redux App
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
6) Redux App (Immer)
--------------------

A copy of <code>Redux App</code> (App # 3), but with many additional technical implementations like:
- Added <code>Immer Reducer</code> and managed the same running flow of App using Immer Reducer, React, Redux, Redux Saga, etc.
- Refoctoring of App's code with all new folder structure (will be beneficial in future if App needs scaling OR additional features).

Steps to run the Redux App (Immer):
- Same as App # 3

----------------------------
7) Product Items App (React)
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
8) Registration Form (React)
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
9) Timeline Form (React)
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
