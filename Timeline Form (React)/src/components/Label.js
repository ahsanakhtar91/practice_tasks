export default Label = (props) => {
    return (
        <div className={"label" + ((props.margin == "true") ? " margins" : "")}>
          <span style={{fontSize: (props.size == "large") ? '25px' : '14px'}}>{props.text}</span>
        </div>
    );
}