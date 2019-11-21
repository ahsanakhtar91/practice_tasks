import React from "react";
import { Link } from "react-router-dom";
import { deleteItem } from "../appRedux/actions/actionCreators";
import { Table } from "antd";
import { connect } from 'react-redux';

class Items extends React.Component 
{
  constructor(props)
  {
    super(props); 
  }

  onDeleteItem(index)
  {
    this.props.deleteItem(index);
  }

  render() 
  {
    let i = 0;
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        render: name => <Link to={"/item/"+name}>{name}</Link>
      },
      {
        title: "Quantity",
        dataIndex: "quantity"
      },
      {
        title: "Action",
        render: () => <div style={{cursor:"pointer"}} onClick={this.onDeleteItem.bind(this, i++)}>X</div>
      }
    ];

    const data = this.props.items;

    return <Table 
              columns={columns} 
              dataSource={data} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items
  };
}

const mapDispatchToProps = {
  deleteItem
}


export default connect(
                  mapStateToProps,
                  mapDispatchToProps
      )(Items);