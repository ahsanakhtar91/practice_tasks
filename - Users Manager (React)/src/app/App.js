import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import UsersList from "../components/UsersList";
import UserDetailsForm from "../components/UserDetailsForm";
import { NAV_MODES } from "../common/constants";
import { Layout } from 'antd';

export default function App() {
    return (
        <Router>
            <Layout.Content>
                <div className="content-body">
                    <Switch>
                        <Route exact path="/">
                            <AppHeader mode={NAV_MODES.home} orderByKey="name" />
                            <UsersList orderByKey="name" />
                        </Route>
                        <Route exact path="/add-user">
                            <AppHeader mode={NAV_MODES.addUser} />
                            <UserDetailsForm mode={NAV_MODES.addUser} />
                        </Route>
                        <Route exact path="/edit-user/:userID">
                            <AppHeader mode={NAV_MODES.editUser} />
                            <UserDetailsForm mode={NAV_MODES.editUser} />
                        </Route>
                    </Switch>
                </div>
            </Layout.Content>

            {/* <Layout.Footer style={{ textAlign: "center" }}></Layout.Footer> */}
        </Router>
    );
};