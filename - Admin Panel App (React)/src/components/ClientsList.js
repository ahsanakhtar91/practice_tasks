import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { viewAllClients, deleteClient } from "../redux/actions/actionCreators";
import { Dropdown, Menu, Table } from "antd";
import { connect } from 'react-redux';
import { sortAscending } from "../common/utils";
import threeDotsIcon from "../icons/three-dots-icon.svg";

function ClientsList(props) {
    useEffect(() => {
        props.dispatch(viewAllClients());
    }, []);

    const onDeleteClient = (clientID, storeName) => {
        if (confirm(`Pressing "OK" will delete the client with Store Name: "${storeName}". Are you sure?`)) {
            props.dispatch(deleteClient(clientID));
        }
    };

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
            title: "",
            render: (client) => (
                <>
                    <Dropdown trigger={['click']} placement={"bottomLeft"} overlay={(
                        <Menu style={{ width: "90px" }}>
                            <Menu.Item key="1">
                                <Link className="edit-button click-impression" style={{ width: "90px" }} to={"/view-client/" + client.id}>{"View"}</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link className="edit-button click-impression" style={{ width: "90px" }} to={"/edit-client/" + client.id}>{"Edit"}</Link>
                            </Menu.Item>
                            <Menu.Item key="3" style={{ color: "#c00" }}>
                                <div className="delete-button click-impression" style={{ width: "90px" }} onClick={() => onDeleteClient(client.id, client.branch.storeName)}>{"Delete"}</div>
                            </Menu.Item>
                        </Menu>
                    )}>
                        <a className="ant-dropdown-link" onClick={(event) => event.preventDefault()}>
                            <img
                                className="vap-icon admin-avatar click-impression"
                                src={threeDotsIcon}
                            />
                        </a>
                    </Dropdown>
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
                    (props?.clients ? [...props.clients] : []),
                    (props?.orderByKey)
                ).filter((client) => (
                    client.branch.storeName.replace(/\.|\s/gi, "").match(new RegExp(props.searchText.replace(/\.|\s/gi, ""), "i"))?.length > 0
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
                        <span>{" clients"}</span>
                    </span>
                )
            }}
        />
    );

}

const mapStateToProps = (state, ownProps) => {
    return {
        clients: state.clients,
        searchText: state.searchText
    };
}

export default connect(
    mapStateToProps,
    null
)(ClientsList);