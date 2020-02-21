import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "../components/ItemsList.react";
import Cart from "../components/Cart.react";
import { connect } from 'react-redux';
import { Layout, Select, Icon } from 'antd';
const { Header, Content, Footer } = Layout;
import { fetchItemsRequested, filterItems } from "../appRedux/actions/actionCreators";

import "../../src/less/main.less";

class MainApp extends React.Component 
{
    constructor(props)
    {
        super(props);
    }

    onColourSelected(colour){
        //Filtering Items
        this.props.filterItems(colour);
    }

    componentDidMount()
    {
        //Fetching All Items
        this.props.fetchItemsRequested();
    }

    render() 
    {
        return(
            <Router>
                <Header>
                    <div className="header">
                        <span style={{marginRight: "10px"}}>Filter Products by Colour:</span>
                        <Select size="small" defaultValue={null} style={{ width: 120 }} onChange={this.onColourSelected.bind(this)}>
                            <Select.Option value={null}>No Filter</Select.Option>
                            <Select.Option value="Black">Black</Select.Option>
                            <Select.Option value="Stone">Stone</Select.Option>
                            <Select.Option value="Red">Red</Select.Option>
                        </Select>
                    </div>
                </Header>

                <Content className="content">
                    <div>
                        <Switch>
                            <Route exact path="/" >
                                <div className="app-body">
                                    <div className="items-area">
                                        <Items itemsList={this.props.allItems} />
                                    </div>
                                    <div className="divider"><Icon type="shopping-cart" /><span>Cart</span></div>
                                    <div className="cart-area">
                                        <Cart />
                                    </div>
                                </div>
                            </Route>
                        </Switch>
                    </div>
                </Content>

                <Footer className="footer">A Products List & Cart App implemented using these technologies: React, Redux, Ant Design, Reducers, Redux Saga, React Router, LESS, Babel, Webpack, etc.</Footer>
            </Router>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      allItems: state.products.allItems
    };
}

const mapDispatchToProps = {
    fetchItemsRequested,
    filterItems
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainApp);