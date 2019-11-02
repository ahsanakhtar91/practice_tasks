import React from "react";
import Button from '@material-ui/core/Button';
import FormPopup from './FormPopup.react';
import GistAPIUtils from "../utils/GistAPIUtils";

export default class Header extends React.Component 
{
  constructor(props)
  {
    super();  
    this.state = {isPopupOpen: false};
  }

  openPopup = () =>
  {
    this.setState({isPopupOpen: true});
  }

  closePopup = () =>
  {
    this.setState({isPopupOpen: false});
  }

  saveNotebook = (newItemObj) =>
  {
      GistAPIUtils.createNotebook(newItemObj,
        (successResponse) => {
          this.setState({isPopupOpen: false});
          this.props.updateAppState({loggedIn: true, allNotebooks: null});
        },
        (errorResponse) => {
          console.log('err_create_notebook ==> ', errorResponse);
          this.setState({isPopupOpen: false});
        });
  }

  render() 
  {
    return  <div className={"header " + this.props.type + "-header"}>
              <div>My Notebooks</div>

              <Button variant="contained" color="secondary" className={"button"} onClick={this.openPopup}>
                ADD NEW
              </Button>

              <FormPopup 
                action="Add"
                type="Notebook" 
                inputFields={["Notebook Name", "Note File", "Content"]}
                cancelLabel="CANCEL"
                submitLabel="SUBMIT"
                fullWidth
                isOpen = {this.state.isPopupOpen} 
                submitPopup = {(newItemObj) => this.saveNotebook(newItemObj)} 
                cancelPopup = {this.closePopup} />
            </div>;
  }
}