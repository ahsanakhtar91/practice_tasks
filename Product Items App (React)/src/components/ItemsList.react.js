import React from "react";
import { Table, Avatar, Spin, Button } from "antd";
import { connect } from 'react-redux';

import { addToCart } from "../appRedux/actions/actionCreators";

class ItemsList extends React.Component 
{
  constructor(props)
  {
    super(props); 
  }
  
  onAddToCart(itemId)
  {
    this.props.addToCart(itemId);
  }

  render()
  {
    const columns = [
      {
        title: "Id",
        dataIndex: "id"
      },
      {
        title: "Image",
        dataIndex: "img",
        render: (src) => <Avatar src={src} size="large" shape="square"/>
      },
      {
        title: "Color",
        dataIndex: "colour",
        render: (colour) => <span className={"colour " + colour.toLowerCase()} style={{color: colour}}>{colour}</span>
      },
      {
        title: "Name",
        dataIndex: "name"
      },
      {
        title: "Price ($)",
        dataIndex: "price"
      },
      {
        title: "Stock",
        dataIndex: "quantity",
        render: (quantity) => <div className="cart-quantity-display">{quantity}</div>
      },
      {
        title: "Action",
        render: (item) => <Button type="primary" disabled={item.quantity === 0 ? true : false} size="small" shape="round" icon="shopping-cart" onClick={() => this.onAddToCart(item.id)}>Add to Cart</Button>
      }
    ];

    return (this.props.itemsList && this.props.itemsList.length > 0)  ? 
                                        <div id="items-table">
                                          <Table
                                            size="small"
                                            columns={columns} 
                                            dataSource={this.props.itemsList.filter((item) => item.visible)} 
                                            pagination={false}
                                          />
                                        </div>
                                      : <div className="loading-container">
                                          <Spin size="large" /> Fetching Products...
                                        </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  // return {
  //   allItems: state.products.items
  // };
}

const mapDispatchToProps = {
  addToCart
}

export default connect(
  null,
  mapDispatchToProps
)(ItemsList);