import React from "react";
//should be a stateless component

export default class Label extends React.Component 
{
  constructor()
  {
    super();  
  }

  render() 
  {
    return <div className={"label" + ((this.props.margin == "true") ? " margins" : "")}>
        <span style={{fontSize: (this.props.size == "large") ? '25px' : '14px'}}>{this.props.text}</span>
      </div>;
  }
}