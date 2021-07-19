import React from "react";
import { Link } from "react-router-dom";
import { Layout, Input } from 'antd';
import { debounce } from "debounce";
import searchIcon from "../icons/search.svg";
import recordIcon from "../icons/record.svg";
import addUserIcon from "../icons/add-user.svg";
import exportExcelIcon from "../icons/export-excel.svg";
import { connect } from "react-redux";
import { viewAllUsers, viewSearchedUser } from "../redux/actions/actionCreators";
const { Header } = Layout;

function AppHeader(props) {
    const { dispatch } = props;

    const searchUserByText = (text) => {
        if (text.trim()) {
            dispatch(viewSearchedUser(text.trim()));
        }
        else{
            dispatch(viewAllUsers());
        }
    };

    const searchUserByVoice = () => {
        console.log("searchUserByVoice");
    };

    const goToAddNewUser = () => {
        console.log("goToAddNewUser")
    };

    const exportDataToExcel = () => {
        console.log("exportDataToExcel")
    };

    return (
        (props.mode === "home") ?
            <Header>
                <div className="home-header">
                    <Input
                        className="search-bar"
                        placeholder="Search by typing the Name"
                        prefix={
                            <img className="search-icon" src={searchIcon} />
                        }
                        suffix={
                            <img className="record-icon click-impression" src={recordIcon} title="Search by saying the Name" onClick={searchUserByVoice} />
                        }
                        size="large"
                        onChange={debounce((event) => searchUserByText(event.target.value), 600)}
                    />
                    <img className="add-user-icon click-impression" src={addUserIcon} title="Add New User" onClick={goToAddNewUser} />
                    <img className="export-excel-icon click-impression" src={exportExcelIcon} title="Export Data to Excel" onClick={exportDataToExcel} />
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

export default connect(
    null,
    null
)(AppHeader);