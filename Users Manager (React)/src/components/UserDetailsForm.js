import React, { useState } from "react";
import { Input, Button } from 'antd';
import { connect } from "react-redux";
import { addNewUser, editUser } from "../redux/actions/actionCreators";
import { USER_FORM_MODES } from "../common/constants";
import { camelToTitleCase } from "../common/utils";
import { withRouter } from "react-router-dom";

function UserDetailsForm(props) {
    const userID = ((props.mode === USER_FORM_MODES.editUser && props.match.params?.userID) ?
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
            name: (props.mode === USER_FORM_MODES.editUser && userObjToEdit) ? userObjToEdit.name : "",
            email: (props.mode === USER_FORM_MODES.editUser && userObjToEdit) ? userObjToEdit.email : "",
            city: (props.mode === USER_FORM_MODES.editUser && userObjToEdit) ? userObjToEdit.address.city : "",
            companyName: (props.mode === USER_FORM_MODES.editUser && userObjToEdit) ? userObjToEdit.company.name : ""
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
                [key]: value.trim() ? "" : "Required"
            }
        }));
    };

    const onSubmit = () => {
        let errorsObj = {
            name: state.values.name.trim() ? "" : "Required",
            email: state.values.email.trim() ? "" : "Required",
            city: state.values.city.trim() ? "" : "Required",
            companyName: state.values.companyName.trim() ? "" : "Required"
        };

        if (Object.values(errorsObj).join("").trim()) {
            setState((prevState) => ({
                ...prevState,
                errors: errorsObj
            }));
        }
        else {
            if (props.mode === USER_FORM_MODES.addUser) {
                if (confirm("Are you sure you want to add a new user?")) {
                    props.dispatch(addNewUser({ ...state.values }));
                    props.history.push("");
                }
            }
            else if (props.mode === USER_FORM_MODES.editUser) {
                props.dispatch(editUser({ ...state.values, id: userID }));
                props.history.push("");
            }
        }
    };

    return (
        <div className="user-details-form">
            {Object.keys(state.values).map((key, index) => (
                <div key={index} className="row">
                    <div className="label">
                        <span>{camelToTitleCase(key)}:</span>
                    </div>
                    <div className={`control ${state.errors[key] ? "error" : ""}`}>
                        <Input
                            allowClear={true}
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
            <div className="row">
                <div className="label"></div>
                <div className="control">
                    <Button disabled={Object.values(state.errors).join("").trim()} type="primary" style={{ width: "100%" }} onClick={onSubmit}>
                        {props.mode === USER_FORM_MODES.addUser ? "Add New User" : "Save Changes"}
                    </Button>
                </div>
                <div className="error-text"></div>
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