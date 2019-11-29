import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Items from "../components/Items.react";
import ItemForm from "../components/ItemForm.react";
import ItemView from "../components/ItemView.react";
import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

export default class MainApp extends React.Component 
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
                    <Link to="/add">
                        Add Item
                    </Link>
                </Header>

                <Content style={{ padding: "0 50px" }}>
                    <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
                        <Switch>
                            <div className="app-body">
                                <Route exact path="/" component={Items} />
                                    
                                <Route path="/add" component={ItemForm} />
                                
                                <Route path="/item/:item_name" component={ItemView} />
                            </div>
                        </Switch>
                    </div>
                </Content>

                <Footer style={{ textAlign: "center" }}>A Sample Practice App involving the use of React, Redux, Redux Saga, Immer Reducer, React Router, AntDesign, etc.</Footer>
            </Router>);
    }
}