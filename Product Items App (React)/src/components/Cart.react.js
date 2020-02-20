import React from "react";
import { Link } from "react-router-dom";
import { Table, Icon, Avatar, Button, InputNumber } from "antd";
import { connect } from 'react-redux';
import AppConstants from "../constants/appConstants";

import { removeFromCart, incrementInCart, decrementFromCart } from "../appRedux/actions/actionCreators";

class Cart extends React.Component 
{
  constructor(props)
  {
    super(props); 
  }

  onRemoveFromCart = (itemId) => {
    this.props.removeFromCart(itemId);
  }

  onIncrementInCart = (itemId) => {
    this.props.incrementInCart(itemId);
  }

  onDecrementFromCart = (itemId) => {
    this.props.decrementFromCart(itemId);
  }

  getCartListFooter = (cartItems) => {

    const totalItems = cartItems.reduce((sum, item) => sum += item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum += (item.price * item.quantity), 0);

    return  <table className="cart-footer">
              <tr>
                <td className="footer-label total-quantity">Total Items:</td>
                <td className="footer-value">{totalItems}</td>
              </tr>
              <tr>
                <td className="footer-label">Total Price:</td>
                <td className="footer-value total-price">${totalPrice.toString().indexOf('.') !== -1 ? parseFloat(totalPrice).toFixed(2) : totalPrice}</td>
              </tr>
            </table>
  }

  render() 
  {
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
      },
      {
        title: "Image",
        dataIndex: "img",
        render: (src) => <Avatar src={src} size="small" shape="circle"/>
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
        title: "Quantity",
        render: (item) => <div>
                            <Button size="small" icon="minus" disabled={item.quantity === 0 ? true : false} onClick={() => this.onDecrementFromCart(item.id)}/>
                            <div className="cart-quantity-display">{item.quantity}</div>
                            <Button size="small" icon="plus" disabled={item.quantity === AppConstants.defaultItemStock ? true : false} onClick={() => this.onIncrementInCart(item.id)} />
                          </div>
      },
      {
        title: "Action",
        dataIndex: "id",
        render: (id) => <Button type="danger" shape="circle" icon="delete" onClick={() => this.onRemoveFromCart(id)}/>
      }
    ];

    return (this.props.products && this.props.products.cartItems && this.props.products.cartItems.length > 0)  ? 
                                        <Table 
                                          size="small"
                                          columns={columns} 
                                          dataSource={this.props.products.cartItems} 
                                          pagination={false}
                                          footer={() => this.getCartListFooter(this.props.products.cartItems)}
                                        />
                                      : <div className="loading-container">
                                          Cart Is Empty!
                                        </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.products
  };
}

const mapDispatchToProps = {
  removeFromCart,
  incrementInCart,
  decrementFromCart
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);