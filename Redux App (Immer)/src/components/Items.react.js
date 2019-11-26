import React from "react";
import { Link } from "react-router-dom";
import { Table, Icon } from "antd";
import { connect } from 'react-redux';
import { itemActionCreators } from "../appRedux/modules/items";

const { deleteItemRequested } = itemActionCreators;

class Items extends React.Component 
{
  constructor(props)
  {
    super(props); 
  }

  onDeleteItem(index)
  {
    //dispatching action
    this.props.deleteItemRequested({index: index});
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
        render: () => <Icon type="delete" theme="twoTone" twoToneColor="#f00" onClick={this.onDeleteItem.bind(this, i++)}/>
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
  deleteItemRequested
}


export default connect(
  mapStateToProps,
  mapDispatchToProps)(Items);