import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import UsersList from "../components/UsersList";
import UserDetailsForm from "../components/UserDetailsForm";
import { Layout } from 'antd';
const { Content, Footer } = Layout;

export default function App() {
    return (
        <Router>
            <Content>
                <div className="content-body">
                    <Switch>
                        <Route exact path="/">
                            <AppHeader mode="home" />
                            <UsersList
                                orderByKey="name"
                            />
                        </Route>
                        <Route exact path="/add-user">
                            <AppHeader mode="add-user" />
                            <UserDetailsForm mode="add-user" />
                        </Route>
                        <Route exact path="/edit-user/:user_id">
                            <AppHeader mode="add-user" />
                            <UserDetailsForm mode="edit-user" />
                        </Route>
                    </Switch>
                </div>
            </Content>

            {/* <Footer style={{ textAlign: "center" }}></Footer> */}
        </Router>
    );
};