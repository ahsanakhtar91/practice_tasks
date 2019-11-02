import React from "react";
import Login from '../mainscreens/Login.react';
import Home from '../mainscreens/Home.react';
import Notebook from '../mainscreens/Notebook.react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class GistApp extends React.Component 
{
    constructor()
    {
        super();
        this.state = {loggedIn: (localStorage.accessToken) ? true : false ,
                        allNotebooks: null};
    }

    render() 
    {
        return(
        <Router>
            <div className="top-app-bar">
                <Link to="/" onClick={this.onHomeButtonClicked.bind(this)}>
                    HOME
                </Link>
                &nbsp;&nbsp;
                <Link to="/login" style={{display: (this.state.loggedIn) ? "" : "none"}} onClick={this.onLogOutButtonCliked.bind(this)}>
                    LOGOUT
                </Link>
            </div>
            
            <Switch>
                <div className="app-body">
                    <Route exact path="/">
                        <Home 
                            updateAppState = {(state) => this.updateAppState(state)}
                            appState={this.state}/>
                    </Route>
                    <Route path="/login">
                        <Login 
                            updateAppState = {(state) => this.updateAppState(state)}
                            appState={this.state}/>
                    </Route>
                    <Route path="/notebook/:notebook_id">
                        <Notebook
                            updateAppState = {(state) => this.updateAppState(state)}
                            appState={this.state}/>
                    </Route>
                </div>
            </Switch>
        </Router>);
    }

    updateAppState(stateObj, loggedIn, allNotebooks)
    {
        if(loggedIn == false)   localStorage.clear();

        if(stateObj)
            this.setState(stateObj);
        else
            this.setState({loggedIn: (loggedIn != null) ? loggedIn : this.state.loggedIn,
                            allNotebooks: (allNotebooks != null) ? allNotebooks : this.state.allNotebooks});
    }

    onHomeButtonClicked()
    {
        if(!localStorage.accessToken)
            alert("Authentication Required!!!");
    }

    onLogOutButtonCliked()
    {
        this.updateAppState(null, false);
    }

    componentWillUnmount()
    {
        //localStorage.clear();
    }
}