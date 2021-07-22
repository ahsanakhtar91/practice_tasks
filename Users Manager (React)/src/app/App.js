import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import UsersList from "../components/UsersList";
import UserDetailsForm from "../components/UserDetailsForm";
import { USER_FORM_MODES } from "../common/constants";
import { Layout } from 'antd';

export default function App() {
    return (
        <Router>
            <Layout.Content>
                <div className="content-body">
                    <Switch>
                        <Route exact path="/">
                            <AppHeader mode="home" />
                            <UsersList
                                orderByKey="name"
                            />
                        </Route>
                        <Route exact path="/add-user">
                            <AppHeader mode={USER_FORM_MODES.addUser} />
                            <UserDetailsForm mode={USER_FORM_MODES.addUser} />
                        </Route>
                        <Route exact path="/edit-user/:userID">
                            <AppHeader mode={USER_FORM_MODES.editUser} />
                            <UserDetailsForm mode={USER_FORM_MODES.editUser} />
                        </Route>
                    </Switch>
                </div>
            </Layout.Content>

            {/* <Layout.Footer style={{ textAlign: "center" }}></Layout.Footer> */}
        </Router>
    );
};