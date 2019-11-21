import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Items from "../components/Items.react";
import ItemForm from "../components/ItemForm.react";
import ItemView from "../components/ItemView.react";
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default class ItemsApp extends React.Component 
{
    constructor(props)
    {
        super(props);
    }

    render() 
    {
        return(
            <Router>
                <Header>
                    <Link to="/">
                        View Items
                    </Link>
                    &nbsp; | &nbsp;
                    <Link to="/item">
                        Add Item
                    </Link>
                </Header>

                <Content style={{ padding: "0 50px" }}>
                    <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                        <Switch>
                            <div className="app-body">
                                <Route exact path="/">
                                    <Items/>
                                </Route>
                                <Route exact path="/item">
                                    <ItemForm/>
                                </Route>
                                <Route path="/item/:item_id">
                                    <ItemView/>
                                </Route>
                            </div>
                        </Switch>
                    </div>
                </Content>

                <Footer style={{ textAlign: "center" }}>A Sample Practice App involving the use of React, Redux, React Router, AntDesign, etc.</Footer>
            </Router>);
    }
}