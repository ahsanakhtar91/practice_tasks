import React, { useState } from "react";
import { Input, Button } from 'antd';
import { connect } from "react-redux";
import { addNewUser, editClient } from "../redux/actions/actionCreators";
import { REG_EXP_EMAIL, NAV_MODES } from "../common/constants";
import { camelToTitleCase } from "../common/utils";
import { withRouter } from "react-router-dom";

function UserDetailsForm(props) {
    const userID = ((props.mode === NAV_MODES.editClient && props.match.params?.userID) ?
        parseInt(props.match.params?.userID)
        :
        null
    );
    const userObjToEdit = (userID ?
        (props?.users || []).filter((user) => user.id === userID)?.[0]
        :
        null
    );

    const initState = {
        values: {
            name: (props.mode === NAV_MODES.editClient && userObjToEdit) ? userObjToEdit.name : "",
            email: (props.mode === NAV_MODES.editClient && userObjToEdit) ? userObjToEdit.email : "",
            city: (props.mode === NAV_MODES.editClient && userObjToEdit) ? userObjToEdit.address.city : "",
            companyName: (props.mode === NAV_MODES.editClient && userObjToEdit) ? userObjToEdit.company.name : ""
        },
        errors: {
            name: "",
            email: "",
            city: "",
            companyName: ""
        }
    };

    const [state, setState] = useState(initState);

    const onValueChanged = (key, value) => {
        setState((prevState) => ({
            ...prevState,
            values: {
                ...prevState.values,
                [key]: value
            },
            errors: {
                ...prevState.errors,
                [key]: (value.trim()) ?
                    (key !== "email" || value.trim().match(REG_EXP_EMAIL)) ? "" : "Invalid Email Format"
                    :
                    "Required"
            }
        }));
    };

    const onSubmit = () => {
        let errorsObj = {
            name: (state.values.name.trim()) ? "" : "Required",
            email: (state.values.email.trim()) ?
                (state.values.email.trim().match(REG_EXP_EMAIL)) ? "" : "Invalid Email Format"
                :
                "Required",
            city: (state.values.city.trim()) ? "" : "Required",
            companyName: (state.values.companyName.trim()) ? "" : "Required"
        };

        if (Object.values(errorsObj).join("").trim()) {
            setState((prevState) => ({
                ...prevState,
                errors: errorsObj
            }));
        }
        else {
            if (props.mode === NAV_MODES.addClient) {
                if (confirm("Are you sure you want to add a new user?")) {
                    props.dispatch(addNewUser({ ...state.values }));
                    props.history.push("");
                }
            }
            else if (props.mode === NAV_MODES.editClient) {
                props.dispatch(editClient({ ...state.values, id: userID }));
                props.history.push("");
            }
        }
    };

    return (
        <div className="user-details-form">
            {Object.keys(state.values).map((key, index) => (
                <div key={index} className="column">
                    <div className={`control ${state.errors[key] ? "error" : ""}`}>
                        <Input
                            allowClear={true}
                            placeholder={camelToTitleCase(key)}
                            title={camelToTitleCase(key)}
                            defaultValue={state.values[key]}
                            maxLength={50}
                            onChange={(event) => onValueChanged(key, event.target.value)}
                        />
                    </div>
                    <div className="error-text">
                        <span>{state.errors[key]}</span>
                    </div>
                </div>
            ))}
            <div className="column" style={{ marginTop: "25px" }}>
                <div className="control">
                    <Button disabled={Object.values(state.errors).join("").trim()} type="primary" style={{ width: "100%" }} onClick={onSubmit}>
                        {props.mode === NAV_MODES.addClient ? "Add New User" : "Save Changes"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    };
}

export default connect(
    mapStateToProps,
    null
)(withRouter(UserDetailsForm));