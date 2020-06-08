import React from "react";
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import AppConstants from '../constants/AppConstants';

const Home = (props) => {

    const goToRegistration = () => {
        props.history.push("register");
    }
        
    return(
        <div className="home">
            <Button variant="contained" color="secondary" className={"button"} onClick={() => goToRegistration()}>
                {AppConstants.LABEL_REGISTER}
            </Button>
        </div>
    );
}

export default withRouter(Home);