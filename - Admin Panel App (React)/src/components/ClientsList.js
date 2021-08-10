import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { viewAllUsers, deleteUser } from "../redux/actions/actionCreators";
import { Table } from "antd";
import { connect } from 'react-redux';
import { sortAscending } from "../common/utils";

function ClientsList(props) {
    useEffect(() => {
        props.dispatch(viewAllUsers());
    }, []);

    const onDeleteUser = (userID, userName) => {
        if (confirm(`Pressing "OK" will delete the client "${userName}". Are you sure?`)) {
            props.dispatch(deleteUser(userID));
        }
    }

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "Store Name",
            render: (client) => <span>{client.branch.storeName}</span>
        },
        {
            title: "Business Type",
            render: (client) => <span>{client.business.businessType}</span>
        },
        {
            title: "# of Branches",
            render: (client) => <span>{client.business.noOfBranches}</span>
        },
        {
            title: "Start Date",
            render: (client) => <span>{client.client.startDate}</span>
        },
        {
            title: "Subscription Status",
            render: (client) => <span>{client.client.subscriptionStatus}</span>
        },
        {
            title: "Actions",
            render: (user) => (
                <>
                    <Link className="edit-button click-impression" to={"/edit-client/" + user.id}>{"Edit"}</Link>
                    <span className="delete-button click-impression" onClick={() => onDeleteUser(user.id, user.name)}>{"Delete"}</span>
                </>
            )
        }
    ];

    return (
        <Table
            className="clients-table"
            rowKey={"id"}
            columns={columns}
            dataSource={
                sortAscending(
                    (props?.users ? [...props.users] : []),
                    (props?.orderByKey)
                ).filter((user) => (
                    user.branch.storeName.replace(/\.|\s/gi, "").match(new RegExp(props.searchText.replace(/\.|\s/gi, ""), "i"))?.length > 0
                ))
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
)(ClientsList);