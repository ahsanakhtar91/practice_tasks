import React from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormPopup extends React.Component 
{
  constructor()
  {
    super();
  }
  

  submitPopup = () =>
  {
      let dataObj = {};

      this.props.inputFields.map((field) => {
        const fieldItem = ReactDOM.findDOMNode(this.refs[field.replace(/\s/gi,'')]);
        let fieldValue = fieldItem.querySelector('input').value;

        if(field.endsWith("File"))
          fieldValue += ".txt";

        dataObj[field.replace(/\s/gi, '')] = fieldValue;
      });

      if(this.props.submitPopup)
          this.props.submitPopup(dataObj);
  }

  cancelPopup = () =>
  {
    if(this.props.cancelPopup)
      this.props.cancelPopup();
  }

  render() 
  {
    return  <div className={"popup " + this.props.type + "-popup"}>
              <Dialog open={this.props.isOpen} onClose={this.closePopup} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{this.props.action} {this.props.type}</DialogTitle>
                <DialogContent>
                  {
                    this.props.inputFields.map((field, i) => (
                      <TextField
                        key={i+1}
                        ref={field.replace(/\s/gi, '')}
                        autoFocus
                        margin="dense"
                        id="name"
                        label={field}
                        type="text"
                        fullWidth
                      />
                    ))
                  }
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.cancelPopup} color="primary">
                    CANCEL
                  </Button>
                  <Button onClick={this.submitPopup} variant="contained" color="secondary">
                    SAVE
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
  }
}