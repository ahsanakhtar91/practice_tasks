import React from "react";
import { Input, InputNumber, Button, Row, Col } from 'antd';
import { connect } from "react-redux";
import {addItem} from "../appRedux/actions/actionCreators";
const InputGroup = Input.Group;

class ItemForm extends React.Component 
{
  constructor(props)
  {
    super(props);  
  }

  onAddItem()
  {
    //this.props.dispatch(addItem);

    this.props.addItem(this.refs.item.state.value, this.refs.quantity.inputNumberRef.state.value);
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
  addItem
}

export default connect(
  null,
  mapDispatchToProps)(ItemForm);