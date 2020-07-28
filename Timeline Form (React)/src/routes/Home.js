import React from "react";
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import AppConstants from '../constants/AppConstants';

const Home = (props) => {

    const goToTimelineForm = () => {
        props.history.push("timeline-form");
    }
        
    return(
        <div className="home">
            <Button variant="contained" color="secondary" className={"button"} onClick={() => goToTimelineForm()}>
                {AppConstants.LABEL_PROCEED_TO_FORM}
            </Button>
        </div>
    );
}

export default withRouter(Home);