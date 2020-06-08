import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import AppConstants from '../constants/AppConstants';
import { TextField, Dialog, DialogTitle, DialogContentText, DialogContent, DialogActions } from "@material-ui/core";

const Registration = (props) => {

  const [ state, setState ] = useState({
    values: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      date: ""
    },
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    isSuccessful: false
  });

  const { values, errors, isSuccessful } = state;

  const onChangeInput = (value, key) => {
    setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [key]: value
      }
    }));
  }

  const onRegister = () => {
    let recordedErrors = {};

    if(values.firstName.length === 0){
      recordedErrors.firstName = AppConstants.ERROR_FIRST_NAME_REQUIRED;
    }
    if(values.lastName.length === 0){
      recordedErrors.lastName = AppConstants.ERROR_LAST_NAME_REQUIRED;
    }
    if(!values.email.match(AppConstants.REGEXP_EMAIL)){
      recordedErrors.email = AppConstants.ERROR_EMAIL_INVALID;
    }
    if(values.password.length < 8 ||
      !values.password.match('[a-z]') ||
      !values.password.match('[A-Z]') ||
      !values.password.match('[0-9]') ||
      !values.password.match(/[\*\.\!\@\#\$\%\^\&\(\)\{\}\[\]\:\;\<\>\,\.\?\/\~\_\+\-\=\|\\]/)){
        recordedErrors.password = AppConstants.ERROR_PASSWORD_INVALID;
    }

    if(Object.keys(recordedErrors).length > 0){
      setState((prevState) => ({
        ...prevState,
        errors: recordedErrors
      }));
    }
    else{
      setState((prevState) => ({
        ...prevState,
        errors: {},
        isSuccessful: true
      }));
    }
  }

  return (
    <>
      {!isSuccessful 
        ?
        <>
          <div className="top-app-bar">
            <Link to="/">
                Go To Home
            </Link>
          </div>
          <div className="registration">

            <div className="form-field">
              <TextField
                autoFocus
                error={errors.firstName ? true : false}
                helperText={errors.firstName ? errors.firstName : " "}
                label={AppConstants.LABEL_FIRST_NAME}
                id="firstName"
                defaultValue=""
                variant="outlined"
                size="small"
                onChange={(event) => onChangeInput(event.target.value, "firstName")}
              />
            </div>
            
            <div className="form-field">
              <TextField
                error={errors.lastName ? true : false}
                helperText={errors.lastName ? errors.lastName : " "}
                label={AppConstants.LABEL_LAST_NAME}
                id="lastName"
                defaultValue=""
                variant="outlined"
                size="small"
                onChange={(event) => onChangeInput(event.target.value, "lastName")}
              />
            </div>

            <div className="form-field">
              <TextField
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email : " "}
                label={AppConstants.LABEL_EMAIL}
                id="email"
                defaultValue=""
                variant="outlined"
                size="small"
                onChange={(event) => onChangeInput(event.target.value, "email")}
              />
            </div>

            <div className="form-field">
              <TextField
                error={errors.password ? true : false}
                helperText={errors.password ? errors.password : " "}
                label={AppConstants.LABEL_PASSWORD}
                id="password"
                defaultValue=""
                variant="outlined"
                size="small"
                type="password"
                onChange={(event) => onChangeInput(event.target.value, "password")}
              />
            </div>

            <div className="form-field">
              <TextField
                id="date"
                label="DOB"
                type="date"
                defaultValue=""
                variant="outlined"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(event) => onChangeInput(event.target.value, "date")}
              />
            </div>

            <div className="form-field">
              <Button variant="contained" color="primary" className={"button"} onClick={() => onRegister()}>
                {AppConstants.LABEL_REGISTER}
              </Button>
            </div>

          </div>
        </>
      :
        <Dialog aria-labelledby="simple-dialog-title" open={true}>
          <DialogTitle id="simple-dialog-title">{AppConstants.SUCCESS_HEADER}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {AppConstants.SUCCESS_MESSAGE}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => {
              props.history.push("/");
            }}>
              Okay
            </Button>
          </DialogActions>
        </Dialog>
      }
    </>
  );
}

export default withRouter(Registration);