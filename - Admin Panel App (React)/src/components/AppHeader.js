import React from "react";
import { withRouter } from "react-router-dom";
import burgerMenu from "../icons/burger-menu.svg";
import appLogo from "../icons/app-logo.png";
import bellIcon from "../icons/bell-icon.png";
import adminAvatar from "../icons/admin-avatar.png";
import { Layout } from 'antd';
import { connect } from "react-redux";
import { getNavRouteName, getClient } from "../common/utils";

function AppHeader(props) {
    const showHideDrawer = () => {
        props.toggleDrawer();
    };

    return (
        <Layout.Header className="top-header">
            <div className="app-header">
                <div className="left-sec">
                    <img
                        className="vap-icon click-impression"
                        src={burgerMenu}
                        title="Add New Client"
                        onClick={showHideDrawer}
                    />
                    <div className="top-label">{getNavRouteName(props.history)}</div>
                </div>
                <img
                    className="vap-icon app-logo click-impression"
                    src={appLogo}
                    title="Add New Client"
                    onClick={() => props.history.push("")}
                />
                <div className="right-sec">
                    <img
                        className="vap-icon bell-icon click-impression"
                        src={bellIcon}
                    />
                    <div className="label">{getClient()}</div>
                    <img
                        className="vap-icon admin-avatar click-impression"
                        src={adminAvatar}
                    />
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
)(withRouter(AppHeader));