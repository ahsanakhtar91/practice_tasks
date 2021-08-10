import React, { useState } from "react";
import { Input, Button, Select } from 'antd';
import { connect } from "react-redux";
import { addNewClient, editClient } from "../redux/actions/actionCreators";
import { REG_EXP_EMAIL, NAV_MODES } from "../common/constants";
import { camelToTitleCase } from "../common/utils";
import { withRouter } from "react-router-dom";

function ClientDetailsForm(props) {
    const clientID = ((props.mode === NAV_MODES.editClient && props.match.params?.clientID) ?
        parseInt(props.match.params?.clientID)
        :
        null
    );
    const clientObjToEdit = (clientID ?
        (props?.clients || []).filter((client) => client.id === clientID)?.[0]
        :
        null
    );

    const sectionsIdentifierKeys = {
        clientClientName: "Client Details",
        businessBusinessType: "Business Legal Details",
        branchStoreName: "Main Branch Details"
    };

    const initState = {
        values: {
            clientClientName: (props.mode === NAV_MODES.editClient && clientObjToEdit) ? clientObjToEdit.client.clientName : "",
            clientEmail: (props.mode === NAV_MODES.editClient && clientObjToEdit) ? clientObjToEdit.client.email : "",
            clientPhone: (props.mode === NAV_MODES.editClient && clientObjToEdit) ? clientObjToEdit.client.phone : "",
            clientStartDate: (props.mode === NAV_MODES.editClient && clientObjToEdit) ? clientObjToEdit.client.startDate : new Date().toLocaleDateString("en-CA"),
            clientSubscriptionStatus: (props.mode === NAV_MODES.editClient && clientObjToEdit) ? clientObjToEdit.client.subscriptionStatus : "Active",

            businessBusinessType: (props.mode === NAV_MODES.editClient && clientObjToEdit) ? clientObjToEdit.business.businessType : "",
            businessLegalName: (props.mode === NAV_MODES.editClient && clientObjToEdit) ? clientObjToEdit.business.legalName : "",
            businessLicenseNumber: (props.mode === NAV_MODES.editClient && clientObjToEdit) ? clientObjToEdit.business.licenseNumber : "",
            businessTaxNumber: (props.mode === NAV_MODES.editClient && clientObjToEdit) ? clientObjToEdit.business.taxNumber : "",
            businessLicenseDoc: "",
            businessNoOfBranches: (props.mode === NAV_MODES.editClient && clientObjToEdit) ? clientObjToEdit.business.noOfBranches : "",

            branchStoreName: (props.mode === NAV_MODES.editClient && clientObjToEdit) ? clientObjToEdit.branch.storeName : "",
            branchAddress: (props.mode === NAV_MODES.editClient && clientObjToEdit) ? clientObjToEdit.branch.address : "",
            branchEmail: (props.mode === NAV_MODES.editClient && clientObjToEdit) ? clientObjToEdit.branch.email : "",
            branchPhone: (props.mode === NAV_MODES.editClient && clientObjToEdit) ? clientObjToEdit.branch.phone : ""
        },
        errors: {
            clientClientName: "",
            clientEmail: "",
            clientPhone: "",
            clientStartDate: "",
            clientSubscriptionStatus: "",

            businessBusinessType: "",
            businessLegalName: "",
            businessLicenseNumber: "",
            businessTaxNumber: "",
            businessLicenseDoc: "",
            businessNoOfBranches: "",

            branchStoreName: "",
            branchAddress: "",
            branchEmail: "",
            branchPhone: ""
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
                    ((key !== "clientEmail" && key !== "branchEmail") || value.trim().match(REG_EXP_EMAIL)) ? "" : "Invalid Email Format"
                    :
                    "Required"
            }
        }));
    };

    const onSubmit = () => {
        let errorsObj = {
            clientClientName: (state.values.clientClientName.trim()) ? "" : "Required",
            clientEmail: ((state.values.clientEmail.trim()) ?
                (state.values.clientEmail.trim().match(REG_EXP_EMAIL)) ? "" : "Invalid Email Format"
                :
                "Required"
            ),
            clientPhone: (state.values.clientPhone.trim()) ? "" : "Required",
            clientStartDate: (state.values.clientStartDate.trim()) ? "" : "Required",
            clientSubscriptionStatus: (state.values.clientSubscriptionStatus.trim()) ? "" : "Required",

            businessBusinessType: (state.values.businessBusinessType.trim()) ? "" : "Required",
            businessLegalName: (state.values.businessLegalName.trim()) ? "" : "Required",
            businessLicenseNumber: (state.values.businessLicenseNumber.trim()) ? "" : "Required",
            businessTaxNumber: (state.values.businessTaxNumber.trim()) ? "" : "Required",
            businessLicenseDoc: "",
            businessNoOfBranches: (state.values.businessNoOfBranches.trim()) ? "" : "Required",

            branchStoreName: (state.values.branchStoreName.trim()) ? "" : "Required",
            branchAddress: (state.values.branchAddress.trim()) ? "" : "Required",
            branchEmail: ((state.values.branchEmail.trim()) ?
                (state.values.branchEmail.trim().match(REG_EXP_EMAIL)) ? "" : "Invalid Email Format"
                :
                "Required"
            ),
            branchPhone: (state.values.branchPhone.trim()) ? "" : "Required"
        };

        if (Object.values(errorsObj).join("").trim()) {
            setState((prevState) => ({
                ...prevState,
                errors: errorsObj
            }));
        }
        else {
            if (props.mode === NAV_MODES.addClient) {
                if (confirm("Are you sure you want to add a new client?")) {
                    props.dispatch(addNewClient({ ...state.values }));
                    props.history.push("");
                }
            }
            else if (props.mode === NAV_MODES.editClient) {
                props.dispatch(editClient({ ...state.values, id: clientID }));
                props.history.push("");
            }
        }
    };

    return (
        <div className="client-details-form">
            {Object.keys(state.values).map((key, index) => (
                <div key={index}>
                    {sectionsIdentifierKeys[key] &&
                        <div className="section-heading" style={{ marginTop: index > 0 ? "27px" : "0px" }}>{sectionsIdentifierKeys[key]}</div>
                    }
                    <div className="column">
                        <div className="row">
                            <div className="control-label">{camelToTitleCase(key, true)}</div>

                            <div className={`control-input ${state.errors[key] ? "error" : ""}`}>
                                {(key !== "clientSubscriptionStatus" && key !== "businessBusinessType" && key !== "businessLicenseDoc") ?
                                    <Input
                                        allowClear={true}
                                        placeholder={"Enter " + camelToTitleCase(key, true)}
                                        defaultValue={(key.match(/date/i) && !clientObjToEdit) ?
                                            new Date().toLocaleDateString("en-CA")
                                            :
                                            (key.match(/date/i)) ?
                                                new Date(state.values[key]).toLocaleDateString("en-CA")
                                                :
                                                state.values[key]
                                        }
                                        maxLength={50}
                                        type={(key.match(/number|phone|noOF/i)) ?
                                            "number"
                                            :
                                            (key.match(/date/i)) ? "date" : "text"
                                        }
                                        disabled={(key.match(/date/i) && !clientObjToEdit)}
                                        title={camelToTitleCase(key, true)}
                                        onChange={(event) => {
                                            (key.match(/date/i)) ?
                                                onValueChanged(key, new Date(event.target.value).toLocaleDateString("en-US"))
                                                :
                                                onValueChanged(key, event.target.value)
                                        }}
                                    />
                                    :
                                    (key === "clientSubscriptionStatus") ?
                                        <Select
                                            disabled={!clientObjToEdit}
                                            placeholder={"Enter " + camelToTitleCase(key, true)}
                                            defaultValue={state.values[key] ? state.values[key] : "Active"}
                                            style={{ width: "100%", height: "100%" }}
                                            onChange={(value) => onValueChanged(key, value)}
                                        >
                                            <Select.Option key="1" value="Active">Active</Select.Option>
                                            <Select.Option key="2" value="Inactive">Inactive</Select.Option>
                                        </Select>
                                        :
                                        (key === "businessBusinessType") ?
                                            <Select
                                                placeholder={"Enter " + camelToTitleCase(key, true)}
                                                defaultValue={state.values[key] ? state.values[key] : ""}
                                                style={{ width: "100%", height: "100%" }}
                                                onChange={(value) => onValueChanged(key, value)}
                                            >
                                                <Select.Option key="1" value="Online Store">Online Store</Select.Option>
                                                <Select.Option key="2" value="Online Business">Online Business</Select.Option>
                                                <Select.Option key="3" value="Shop">Shop</Select.Option>
                                                <Select.Option key="4" value="Homemade">Homemade</Select.Option>
                                                <Select.Option key="6" value="Cart">Cart</Select.Option>
                                                <Select.Option key="5" value="Sweet Cart">Sweet Cart</Select.Option>
                                            </Select>
                                            :
                                            <Input
                                                defaultValue={state.values[key] ? state.values[key] : ""}
                                                type="file"
                                                style={{ width: "100%", height: "100%", paddingTop: "8px" }}
                                                onChange={(event) => onValueChanged(key, event.target.value)}
                                            />
                                }
                            </div>
                        </div>
                        <div className="error-text" style={{ paddingBottom: (state.errors[key]) ? "2.5px" : "0px" }}>
                            <span>{state.errors[key]}</span>
                        </div>
                    </div>
                </div>
            ))
            }
            <div className="column" style={{ marginTop: "25px" }}>
                <div className="control-input">
                    <Button className="submit-button click-impression" disabled={Object.values(state.errors).join("").trim()} type="primary" onClick={onSubmit}>
                        {props.mode === NAV_MODES.addClient ? "Add Client" : "Save Changes"}
                    </Button>
                </div>
            </div>
        </div >
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        clients: state.clients
    };
}

export default connect(
    mapStateToProps,
    null
)(withRouter(ClientDetailsForm));