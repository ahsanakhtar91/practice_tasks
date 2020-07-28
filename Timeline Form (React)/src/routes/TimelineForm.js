import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import AppConstants from '../constants/AppConstants';
import { TextField } from "@material-ui/core";
import { Timeline, TimelineEvent } from 'react-event-timeline';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import blackIcon from "../../src/assets/images/black-icon.svg";
import blueTickedIcon from "../../src/assets/images/blue-ticked-icon.png";


const TimelineForm = (props) => {

    const [state, setState] = useState({
        focusedIndex: 0,
        values: {},
    });

    const { focusedIndex, values } = state;

    const setFocus = (index) => {
        setState((prevState) => ({
            ...prevState,
            focusedIndex: index
        }));
    };

    const onFormInputChanged = (value, key) => {
        setState((prevState) => ({
            ...prevState,
            values: {
                ...prevState.values,
                [key]: value
            }
        }));
    };

    //Logging all values in console whenever any of them gets changed (by reading them from the state)
    console.log(values);

    const onSubmitted = () => {
        //Logging all values in console when the form gets submitted (by reading them from the state)
        console.log("Submitted Values: ", values);

        //Also showing a toast here!
        ToastsStore.success("Your report has been successfully submitted!", 3000)

        //Now showing all values in a modal
        setState((prevState) => ({
            ...prevState,
            isSubmitted: true
        }));
    }

    return (
        <>
            <div className="top-app-bar">
                <Link to="/">
                    Go To Home
                </Link>
            </div>
            <div className="timeline-form">
                <Timeline
                    lineColor="rgba(204, 204, 204, 0.4)"
                >
                    {[
                        AppConstants.LABEL_EXAMINATION,
                        AppConstants.LABEL_CLINICAL_HISTORY,
                        AppConstants.LABEL_TECHNIQUE,
                        AppConstants.LABEL_FINDINGS,
                        AppConstants.LABEL_IMPRESSIONS
                    ].map((title, index) => (
                        <TimelineEvent
                            key={index}
                            contentStyle={{ boxShadow: "none", backgroundColor: "#000" }}
                            title={title}
                            titleStyle={{
                                fontSize: "14px",
                                fontWeight: 500,
                                marginTop: index === 0 ? "-20px" : "0px",
                                marginLeft: "9px",
                                paddingTop: "8px",
                                color: (index === focusedIndex) ? "#fff" : "rgba(204, 204, 204, 0.4)"
                            }}
                            iconColor={(index === focusedIndex) ? "#fff" : "#333"}
                            icon={
                                <i onClick={() => setFocus(index)} style={{
                                    backgroundImage: `url(${(index < focusedIndex) ? blueTickedIcon : blackIcon})`,
                                    // backgroundImage: `url(${blackIcon})`,
                                    width: "36px",
                                    height: (index < focusedIndex) ? "36px" : "38px",
                                    backgroundSize: "cover",
                                    marginLeft: "-4px"
                                }} />
                            }
                        >
                            <TextField
                                multiline
                                autoFocus={index === 0}
                                id="firstName"
                                defaultValue=""
                                variant="outlined"
                                size="small"
                                fullWidth
                                style={{ height: "100px", color: "#fff" }}
                                onFocus={() => setFocus(index)}
                                onChange={(event) => onFormInputChanged(event.target.value, title.toLowerCase().replace(/\s/gi, ''))}
                            />
                        </TimelineEvent>
                    ))}
                </Timeline>
            </div>
            <div className="submit-container">
                <Button variant="contained" style={{ width: "250px" }} color="primary" className={"button"} onClick={() => onSubmitted()}>
                    {AppConstants.LABEL_SUBMIT}
                </Button>
                <ToastsContainer position={ToastsContainerPosition.TOP_RIGHT} store={ToastsStore} />
            </div>
        </>
    );
}

export default withRouter(TimelineForm);