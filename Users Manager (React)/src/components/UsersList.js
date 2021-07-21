import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { viewAllUsers, deleteUser } from "../redux/actions/actionCreators";
import { Table } from "antd";
import { connect } from 'react-redux';
import { sortAscending } from "../common/utils";

function UsersList(props) {
    useEffect(() => {
        props.dispatch(viewAllUsers());
    }, []);

    const onDeleteUser = (userID, userName) => {
        if (confirm(`Pressing "OK" will delete the user "${userName}". Are you sure?`)) {
            props.dispatch(deleteUser(userID));
        }
    }

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            // render: (name, user) => <Link to={"/edit-user/" + user.id}>{name}</Link>
        },
        {
            title: "Email",
            dataIndex: "email",
            // render: (email, user) => <Link to={"/edit-user/" + user.id}>{email}</Link>
        },
        {
            title: "Actions",
            render: (user) => (
                <>
                    <Link className="edit-button click-impression" to={"/edit-user/" + user.id}>{"Edit"}</Link>
                    <span className="delete-button click-impression" onClick={() => onDeleteUser(user.id, user.name)}>{"Delete"}</span>
                </>
            )
        }
    ];

    console.log(props?.users);

    return (
        <Table
            className="users-table"
            rowKey={"id"}
            columns={columns}
            dataSource={
                sortAscending(
                    (props?.users ?? []),
                    (props?.orderByKey)
                ).filter((user) => user.name.match(new RegExp(props.searchText, "i"))?.length > 0)
            }
            pagination={{
                style: { marginRight: 18 },
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
        users: state.users,
        searchText: state.searchText
    };
}

export default connect(
    mapStateToProps,
    null
)(UsersList);