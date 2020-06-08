import React from "react";
import Home from '../routes/Home.react';
import Registration from '../routes/Registration';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MainApp = () => {
        
    return(
        <Router>  
            <Switch>
                <div className="app-body">
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/register">
                        <Registration />
                    </Route>
                </div>
            </Switch>
        </Router>
    );
}

export default MainApp;