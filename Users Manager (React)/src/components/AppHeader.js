import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../icons/search.svg";
import clearIcon from "../icons/clear.svg";
import addUserIcon from "../icons/add-user.svg";
import exportExcelIcon from "../icons/export-excel.svg";
import { Layout, Input } from 'antd';
import { debounce } from "debounce";
import { connect } from "react-redux";
import { viewAllUsers, viewSearchedUser } from "../redux/actions/actionCreators";
import VoiceSearcher from "./VoiceSearcher";
const { Header } = Layout;

function AppHeader(props) {
    const searchBarRef = useRef(null);

    useEffect(() => {
        searchBarRef.current.input.value = props.searchText
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
        console.log("goToAddNewUser");
    };

    const exportDataToExcel = () => {
        console.log("exportDataToExcel");
    };

    return (
        (props.mode === "home") ?
            <Header>
                <div className="home-header">
                    <Input
                        ref={searchBarRef}
                        className="search-bar"
                        placeholder="Search by typing the name..."
                        prefix={
                            props.searchText ?
                                <img className="clear-icon" src={clearIcon} onClick={clearSearch} />
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
                    <img
                        className="export-excel-icon click-impression"
                        src={exportExcelIcon}
                        title="Export Data to Excel"
                        onClick={exportDataToExcel}
                    />
                </div>

            </Header>
            :
            <Header>
                <Link to="/">
                    Home
                </Link>
                &nbsp; | &nbsp;
                Add New User
            </Header>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        searchText: state.searchText
    };
}

export default connect(
    mapStateToProps,
    null
)(AppHeader);