import React from "react";
import Home from '../routes/Home';
import TimelineForm from '../routes/TimelineForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainApp = () => {

    return (
        <Router>
            <Switch>
                <div className="app-body">
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/timeline-form">
                        <TimelineForm />
                    </Route>
                </div>
            </Switch>
        </Router>
    );
}

export default MainApp;