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
import { viewAllUsers, viewSearchedUser } from "../redux/actions/actionCreators";
import VoiceSearcher from "./VoiceSearcher";

function ContentHeader(props) {
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
        props.history.push("add-client");
    };

    return (
        (props.mode === NAV_MODES.home) ?
            <Layout.Header>
                <div className="content-header">
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
                        onChange={debounce((event) => searchUserByText(event.target.value), 250)}
                    />
                    <Button type="primary" size="medium" className="add-client-button click-impression" onClick={goToAddNewUser}>
                        <div>Add Clients</div>
                        <img
                            className="add-client-icon"
                            src={addClientIcon}
                        />
                    </Button>
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
                        <h3>{props.mode === NAV_MODES.addClient ? "Add New User" : "Edit User"}</h3>
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
)(withRouter(ContentHeader));