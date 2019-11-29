import React from "react";
import { Input, InputNumber, Button, Row, Col } from 'antd';
import { connect } from "react-redux";
import { itemActionCreators } from "../appRedux/modules/items";
const InputGroup = Input.Group;

const { addItemRequested } = itemActionCreators;

class ItemForm extends React.Component 
{
  constructor(props)
  {
    super(props);  
  }

  onAddItem()
  {
    const itemName = this.refs.item.state.value ? this.refs.item.state.value : "item_" + new Date().getTime();

    //dispatching action
    this.props.addItemRequested({name: itemName, quantity: this.refs.quantity.inputNumberRef.state.value});
    
    this.props.history.goBack();  // OR this.props.history.push("/");
  }

  render() 
  {
    return (
      <div className="itemform">
        <InputGroup size="medium">
          <Row>
            <Col>
              Item Name:
            </Col>
            <Col>
              <Input ref="item" placeholder="Item Name" maxLength={20} />
            </Col>
          </Row>
          <Row>
            <Col>
              Quantity:
            </Col>
            <Col>
              <InputNumber ref="quantity" min={0} max={100} defaultValue={0} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button type="primary" onClick={this.onAddItem.bind(this)}>Add Item</Button>
            </Col>
          </Row>
        </InputGroup>
      </div>);
  }
}

//const mapDispatchToProps = (disp, action) => {
//  dispatch: disp(action);
//}

const mapDispatchToProps = {
  addItemRequested
}

export default connect(
  null,
  mapDispatchToProps)(ItemForm);