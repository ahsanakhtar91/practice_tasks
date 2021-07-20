import React from "react";
import { Input, InputNumber, Button, Row, Col } from 'antd';
import { connect } from "react-redux";
import { addUser } from "../redux/actions/actionCreators";
const InputGroup = Input.Group;

function AddUserForm(props) {
    const onAddUser = () => {
        // props.addItem(this.refs.item.state.value, this.refs.quantity.inputNumberRef.state.value);
    }

    return (
        <div className="add-user-form">
            <InputGroup size="medium">
                <Row>
                    <Col>
                        Item Name:
                    </Col>
                    <Col>
                        <Input placeholder="Item Name" maxLength={20} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Quantity:
                    </Col>
                    <Col>
                        <InputNumber min={0} max={100} defaultValue={0} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button type="primary" onClick={() => onAddUser()}>Add User</Button>
                    </Col>
                </Row>
            </InputGroup>
        </div>
    );
}

// const mapDispatchToProps = (disp, action) => {
//  dispatch: disp(action);
// }

const mapDispatchToProps = {
    addUser
}

export default connect(
    null,
    mapDispatchToProps
)(AddUserForm);