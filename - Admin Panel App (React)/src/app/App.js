import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import ContentHeader from "../components/ContentHeader";
import ClientsList from "../components/ClientsList";
import ClientDetailsForm from "../components/ClientDetailsForm";
import { NAV_MODES } from "../common/constants";
import { Layout, Menu, Drawer, Modal } from 'antd';
import AppHeader from "../components/AppHeader";
import { getNavRouteName } from "../common/utils";
import clientsIcon from "../icons/clients-icon.png";
import inquiriesIcon from "../icons/inquiries-icon.png";
import teamsIcon from "../icons/teams-icon.png";
import settingsIcon from "../icons/settings-icon.png";
import blogIcon from "../icons/blog-icon.png";

export default function App() {
    const history = useHistory();
    const [drawerVisible, setDrawerVisible] = useState(false);

    const onDrawerMenuItemClicked = (item) => {
        if (item.title === "Clients") {
            setDrawerVisible(false);
            history.push("");
        }
    };

    return (
        <>
            <Drawer
                title={"Drawer Menu"}
                placement="left"
                closable={true}
                onClose={() => setDrawerVisible(false)}
                visible={drawerVisible}
                getContainer={false}
                width={300}
                style={{ position: 'absolute' }}
            >
                <div className="drawer-menu-content">
                    {[
                        { title: "Clients", icon: clientsIcon },
                        { title: "Inquiries", icon: inquiriesIcon },
                        { title: "Teams", icon: teamsIcon },
                        { title: "Settings", icon: settingsIcon },
                        { title: "Blog", icon: blogIcon }
                    ].map((item, index) => (
                        <div key={index} className="drawer-menu-content-item">
                            <img
                                className="vap-icon click-impression"
                                src={item.icon}
                                onClick={() => onDrawerMenuItemClicked(item)}
                            />
                            <div className="label">{item.title}</div>
                        </div>
                    ))}
                </div>
            </Drawer>

            <div className="content-body">
                <Layout>
                    <AppHeader toggleDrawer={() => setDrawerVisible(!drawerVisible)} />

                    <Layout>
                        <Layout.Sider width={250}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['1']}
                                theme="light"
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <Menu.Item key="1">{getNavRouteName(history)}</Menu.Item>
                            </Menu>
                        </Layout.Sider>

                        <Layout>
                            <Layout.Content>
                                <div className="content-body">
                                    <ContentHeader mode={NAV_MODES.home} orderByKey="id" />

                                    <ClientsList orderByKey="id" />

                                    <Switch>
                                        <Route exact path="/"></Route>

                                        <Route exact path="/add-client">
                                            <Modal
                                                title={"Add New Client"}
                                                centered={false}
                                                visible={true}
                                                footer={false}
                                                closable={true}
                                                onCancel={() => history.push("")}
                                            >
                                                <ClientDetailsForm mode={NAV_MODES.addClient} />
                                            </Modal>
                                        </Route>

                                        <Route exact path="/edit-client/:clientID">
                                            <Modal
                                                title={"Edit Client"}
                                                centered={false}
                                                visible={true}
                                                footer={false}
                                                closable={true}
                                                destroyOnClose={true}
                                                onCancel={() => history.push("")}
                                            >
                                                <ClientDetailsForm mode={NAV_MODES.editClient} />
                                            </Modal>
                                        </Route>
                                    </Switch>
                                </div>
                            </Layout.Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        </>
    );
};