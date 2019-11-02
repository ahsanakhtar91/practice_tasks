import React from "react";
import Button from '@material-ui/core/Button';
import AppConstants from '../constants/AppConstants';

export default class Login extends React.Component 
{
  constructor()
  {
    super();  
  }

  render() 
  {
    return <div className="login">
        <Button href={AppConstants.GITHUB_OAUTH_URL + '?client_id=' + AppConstants.clientId + '&scope=' + AppConstants.scope} variant="contained" color="secondary" className={"button"}>
          LOGIN WITH GIHUB OAUTH
        </Button>
      </div>;
  }
}