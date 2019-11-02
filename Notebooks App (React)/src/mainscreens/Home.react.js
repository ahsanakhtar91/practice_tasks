//  lib
import React from "react";
import {withRouter} from "react-router-dom";
// src
import NotebookTable from '../components/NotebookTable.react';
import Header from '../components/Header.react';
import GistAPIUtils from "../utils/GistAPIUtils";

class Home extends React.Component 
{
  constructor()
  {
    super();  
  }

  render() 
  {
    return  <div className="home">
              <Choose>
              
                <When condition={ !this.props.appState.loggedIn }>
                    Getting <strong>Access Token</strong>...
                </When>

                <When condition={ this.props.appState.allNotebooks == null }>
                    Fetching <strong>Notebooks</strong>...
                </When>

                <Otherwise>
                    <Header 
                      type="table" 
                      updateAppState={(state) => this.props.updateAppState(state)}/>
                    <NotebookTable 
                      tableData = {this.props.appState.allNotebooks} 
                      updateAppState={(state) => this.props.updateAppState(state)} />
                </Otherwise>

              </Choose>
            </div>
  }


  componentDidMount()
  {
    if(!this.props.appState.loggedIn)
    {
      let code = new URLSearchParams(this.props.location.search).get('code');
      if(code)
      {
        GistAPIUtils.getAccessToken(code,
          (successResponse) => {
            console.log('session ==>', successResponse);
            let session = JSON.parse(successResponse);
            localStorage.accessToken = session.accessToken;
            localStorage.userId = session.user;
            localStorage.userName = session.name;
            
            this.props.updateAppState({loggedIn: true});
          });

        this.props.history.push("/");
      }
      else if(!localStorage.accessToken)
      {
        this.props.history.push("/login");
      }
    }
    else
    {
      if(this.props.appState.allNotebooks == null)
      {
        GistAPIUtils.getAllNotebooks(
          (successResponse) => {
            this.props.updateAppState({loggedIn: true, allNotebooks: successResponse});
          });
      }
    }
  }

  componentDidUpdate()
  {
    if(this.props.appState.loggedIn && this.props.appState.allNotebooks == null)
    {
      GistAPIUtils.getAllNotebooks(
        (successResponse) => {
          this.props.updateAppState({loggedIn: true, allNotebooks: successResponse});
        });
    }
  }
}

export default withRouter(Home);