import React, { useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import searchIcon from "../icons/search.svg";
import clearIcon from "../icons/clear.svg";
import addUserIcon from "../icons/add-user.svg";
import goBackIcon from "../icons/go-back.svg";
import { USER_FORM_MODES } from "../common/constants";
import { Layout, Input } from 'antd';
import { debounce } from "debounce";
import { connect } from "react-redux";
import { viewAllUsers, viewSearchedUser } from "../redux/actions/actionCreators";
import VoiceSearcher from "./VoiceSearcher";
import CSVDownloader from 'react-json-to-csv';

function AppHeader(props) {
    const searchBarRef = useRef(null);

    useEffect(() => {
        if (searchBarRef?.current?.input) {
            searchBarRef.current.input.value = props.searchText;
        }
    }, [props.searchText]);

    const searchUserByText = (text) => {
        if (text.trim()) {
            props.dispatch(viewSearchedUser(text.trim()));
        }
        else {
            props.dispatch(viewAllUsers());
        }
    };

    const clearSearch = () => {
        searchBarRef.current.input.value = "";
        props.dispatch(viewAllUsers());
    };

    const goToAddNewUser = () => {
        props.history.push("add-user");
    };

    return (
        (props.mode === "home") ?
            <Layout.Header>
                <div className="home-header">
                    <Input
                        ref={searchBarRef}
                        className="search-bar"
                        placeholder="Search by typing the name..."
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
                        onChange={debounce((event) => searchUserByText(event.target.value), 300)}
                    />
                    <img
                        className="add-user-icon click-impression"
                        src={addUserIcon}
                        title="Add New User"
                        onClick={goToAddNewUser}
                    />
                    <CSVDownloader
                        className="export-excel-icon click-impression"
                        title="Export Data to Excel"
                        data={(props?.users ?? [])}
                        filename="users-export.csv"
                    />
                </div>

            </Layout.Header>
            :
            <Layout.Header>
                <div className="common-header">
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
                        <h3>{props.mode === USER_FORM_MODES.addUser ? "Add New User" : "Edit User"}</h3>
                    </div>
                </div>
            </Layout.Header>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users,
        searchText: state.searchText
    };
}

export default connect(
    mapStateToProps,
    null
)(withRouter(AppHeader));