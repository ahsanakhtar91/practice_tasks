import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { viewAllUsers, deleteUser } from "../redux/actions/actionCreators";
import { Table } from "antd";
import { connect } from 'react-redux';

function UsersList(props) {
    const { dispatch } = props;

    useEffect(() => {
        dispatch(viewAllUsers());
    }, []);

    const onDeleteUser = (userID) => {
        dispatch(deleteUser(userID));
    }

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            // render: (name) => <Link to={"/edit-user/" + name}>{name}</Link>
        },
        {
            title: "Email",
            dataIndex: "email"
        },
        {
            title: "Actions",
            render: (user) => (
                <>
                    <Link className="edit-button click-impression" to={"/edit-user/" + user.id}>{"Edit"}</Link>
                    <span className="delete-button click-impression" onClick={() => onDeleteUser(user.id)}>{"Delete"}</span>
                </>
            )
        }
    ];

    return (
        <Table
            className="users-table"
            rowKey={"id"}
            columns={columns}
            dataSource={props.users}
            pagination={{
                pageSize: 5,
                position: "bottom",
                showTotal: (total, range) => (
                    <span>
                        <span>{"Showing "}</span>
                        <span style={{ fontWeight: "bold" }}>{`${range[0]}-${range[1]}`}</span>
                        <span>{" of total "}</span>
                        <span style={{ fontWeight: "bold" }}>{total}</span>
                        <span>{" users"}</span>
                    </span>
                )
            }}
        />
    );

}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    };
}

export default connect(
    mapStateToProps,
    null
)(UsersList);