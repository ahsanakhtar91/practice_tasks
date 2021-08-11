-----------------------
Admin Panel App (React)

-----------------------

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

<code>**Live Demo**: </code>

Steps to run the Admin Panel App:
- Run command <code>yarn install</code> on the root directory of Admin Panel App to install the node packages.
- Run the App by running the command <code>yarn start</code> on the root directory.
- Access the app in your browser with: <code>http://localhost:3000</code>