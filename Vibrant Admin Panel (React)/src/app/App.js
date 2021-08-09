import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import ContentHeader from "../components/ContentHeader";
import ClientsList from "../components/ClientsList";
import UserDetailsForm from "../components/UserDetailsForm";
import { NAV_MODES } from "../common/constants";
import { Layout, Menu, Drawer } from 'antd';
import AppHeader from "../components/AppHeader";
import { getNavRouteName } from "../common/utils";
import clientsIcon from "../icons/clients-icon.png";
import inquiriesIcon from "../icons/inquiries-icon.png";
import teamsIcon from "../icons/teams-icon.png";
import settingsIcon from "../icons/settings-icon.png";
import blogIcon from "../icons/blog-icon.png";

export default function App() {

    const [drawerVisible, setDrawerVisible] = useState(false);

    const history = useHistory();

    const onSideMenuItemClicked = (item) => {
        if (item.title === "Clients") {
            setDrawerVisible(false);
            history.push("");
        }
    }

    return (
        <>
            {/* <Layout.Content>
                <div className="content-body">
                    <Switch>
                        <Route exact path="/">
                            <ContentHeader mode={NAV_MODES.home} orderByKey="storeName" />
                            <ClientsList orderByKey="storeName" />
                        </Route>
                        <Route exact path="/add-client">
                            <ContentHeader mode={NAV_MODES.addClient} />
                            <UserDetailsForm mode={NAV_MODES.addClient} />
                        </Route>
                        <Route exact path="/edit-client/:userID">
                            <ContentHeader mode={NAV_MODES.editClient} />
                            <UserDetailsForm mode={NAV_MODES.editClient} />
                        </Route>
                    </Switch>
                </div>
            </Layout.Content> */}

            <Drawer
                title={"Side Menu"}
                placement="left"
                closable={true}
                onClose={() => setDrawerVisible(false)}
                visible={drawerVisible}
                getContainer={false}
                width={300}
                style={{ position: 'absolute' }}
            >
                <div className="side-menu-content">
                    {[
                        { title: "Clients", icon: clientsIcon },
                        { title: "Inquiries", icon: inquiriesIcon },
                        { title: "Teams", icon: teamsIcon },
                        { title: "Settings", icon: settingsIcon },
                        { title: "Blog", icon: blogIcon }
                    ].map((item) => (
                        <div className="side-menu-content-item">
                            <img
                                className="vap-icon click-impression"
                                src={item.icon}
                                onClick={() => onSideMenuItemClicked(item)}
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
                        <Layout.Sider width={250} className="site-layout-background">
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
                                    <Switch>
                                        <Route exact path="/">
                                            <ContentHeader mode={NAV_MODES.home} orderByKey="storeName" />
                                            <ClientsList orderByKey="storeName" />
                                        </Route>
                                        <Route exact path="/add-client">
                                            <ContentHeader mode={NAV_MODES.addClient} />
                                            <UserDetailsForm mode={NAV_MODES.addClient} />
                                        </Route>
                                        <Route exact path="/edit-client/:userID">
                                            <ContentHeader mode={NAV_MODES.editClient} />
                                            <UserDetailsForm mode={NAV_MODES.editClient} />
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