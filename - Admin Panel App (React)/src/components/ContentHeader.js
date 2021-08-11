import React, { useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import searchIcon from "../icons/search.svg";
import clearIcon from "../icons/clear.svg";
import addClientIcon from "../icons/add-client.svg";
import goBackIcon from "../icons/go-back.svg";
import { NAV_MODES } from "../common/constants";
import { Layout, Input, Button } from 'antd';
import { debounce } from "debounce";
import { connect } from "react-redux";
import { viewAllClients, viewSearchedClient } from "../redux/actions/actionCreators";
import VoiceSearcher from "./VoiceSearcher";
import CSVDownloader from 'react-json-to-csv';
import { flattenObject, sortAscending } from "../common/utils";

function ContentHeader(props) {
    const searchBarRef = useRef(null);

    useEffect(() => {
        if (searchBarRef?.current?.input) {
            searchBarRef.current.input.value = props.searchText;
        }
    }, [props.searchText]);

    const searchClientByText = (text) => {
        if (text.trim()) {
            props.dispatch(viewSearchedClient(text.trim()));
        }
        else {
            props.dispatch(viewAllClients());
        }
    };

    const clearSearch = () => {
        searchBarRef.current.input.value = "";
        props.dispatch(viewAllClients());
    };

    const goToAddNewClient = () => {
        props.history.push("add-client");
    };

    return (
        (props.mode === NAV_MODES.home) ?
            <Layout.Header>
                <div className="content-header">
                    <Input
                        ref={searchBarRef}
                        className="search-bar"
                        placeholder="Search by typing the store name..."
                        prefix={
                            props.searchText ?
                                <img
                                    className="clear-icon click-impression"
                                    src={clearIcon}
                                    title="Clear search"
                                    onClick={clearSearch}
                                />
                                :
                                <img className="search-icon" src={searchIcon} />
                        }
                        suffix={
                            <VoiceSearcher dispatch={props.dispatch} />
                        }
                        size="large"
                        onChange={debounce((event) => searchClientByText(event.target.value), 250)}
                    />
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div className="export-excel-div">
                            <span>Export as CSV:</span>
                            <CSVDownloader
                                className="export-excel-icon click-impression"
                                title="Export all clients data to Excel"
                                data={
                                    sortAscending(
                                        (props?.clients ? [...props.clients] : []),
                                        (props?.orderByKey)
                                    ).map((client) => (
                                        flattenObject(client)
                                    ))
                                }
                                filename={`exported_clients.csv`}
                            />
                        </div>
                        <Button type="primary" className="add-client-button click-impression" onClick={goToAddNewClient}>
                            <div>Add Clients</div>
                            <img
                                className="add-client-icon"
                                src={addClientIcon}
                            />
                        </Button>
                    </div>
                </div>

            </Layout.Header>
            :
            <Layout.Header>
                <div className="content-header">
                    <div className="home-icon-link">
                        <Link to="/">
                            <img
                                className="home-icon click-impression"
                                src={goBackIcon}
                                title="Go back"
                            />
                        </Link>
                    </div>
                    <div className="header-title">
                        <h3>{props.mode === NAV_MODES.addClient ? "Add New Client" : "Edit Client"}</h3>
                    </div>
                </div>
            </Layout.Header>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        clients: state.clients,
        searchText: state.searchText
    };
}

export default connect(
    mapStateToProps,
    null
)(withRouter(ContentHeader));