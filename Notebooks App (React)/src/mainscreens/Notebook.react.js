import React from "react";
import ReactDOM from "react-dom";
import Label from '../components/Label.react';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {withRouter} from "react-router-dom";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GistAPIUtils from "../utils/GistAPIUtils";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import FormPopup from '../components/FormPopup.react';

class Notebook extends React.Component 
{
  constructor()
  {
    super(); 
    this.state = {notebookData : null, isPopupOpen: false}
  }

  openPopup = () =>
  {
    this.setState({...this.state, isPopupOpen: true});
  }

  closePopup = () =>
  {
    this.setState({...this.state, isPopupOpen: false});
  }

  componentDidMount()
  {
    GistAPIUtils.getNotebook(this.props.match.params.notebook_id)
      .then((successResponse) =>
      {
        this.setState({...this.state, notebookData: successResponse});
      })
      .catch((errorResponse) =>
      {
        console.log('err_get_notebook ==> ', errorResponse);
      });
  }

  updateNotebook = (updatedItemObj) =>
  {   
    if(this.state.notebookData)
    {
      let updatedState = this.state.notebookData;
      
      updatedState.files = {
        ...updatedState.files, 
        [updatedItemObj.NoteFile]: {
          content: updatedItemObj.Content,
          filename: updatedItemObj.NoteFile
      }};

      GistAPIUtils.updateNotebook(updatedState, this.props.match.params.notebook_id,
        (successResponse) => {
        },
        (errorResponse) => {
          console.log('err_update_notebook ==> ', errorResponse);
        });
      
      this.setState({...updatedState, isPopupOpen: false});
    }
  }

  // componentDidUpdate()
  // {
  //   if(Object.keys(this.state.notebookData.files).length == 0)
  //   {
  //     GistAPIUtils.getNotebook(this.props.match.params.notebook_id)
  //       .then((successResponse) =>
  //       {
  //         this.setState({notebookData: successResponse});
  //       })
  //       .catch((errorResponse) =>
  //       {
  //         console.log('err_get_notebook ==> ', errorResponse);
  //       });
  //     }
  // }

  render() 
  {
    return  <div className="notebook">
              {(!this.state.notebookData) 
                ? 
                <div>Loading <strong>Notebook Details</strong>...</div>
                : 
                <div>
                  <div className="details">
                    <Label size="large" text="Notebook Detail" margin="true" />
                    <Paper>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Owner</TableCell>
                            <TableCell align="left">Created At</TableCell>
                            <TableCell align="left">Updated At</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            <TableRow>
                              <TableCell align="left">{this.state.notebookData.description}</TableCell>
                              <TableCell align="left">{this.state.notebookData.owner.login}</TableCell>
                              <TableCell align="left">{new Date(this.state.notebookData.created_at).toLocaleString()}</TableCell>
                              <TableCell align="left">{new Date(this.state.notebookData.updated_at).toLocaleString()}</TableCell>
                            </TableRow>
                          }
                        </TableBody>
                      </Table>
                    </Paper>
                  </div>
                  <div className="notes">
                    <Label size="large" text="Notes" margin="true" />
                    <Paper>
                      {
                        Object.entries(this.state.notebookData.files).map((fileObj) => 
                        (
                          <ExpansionPanel>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography className={"note-heading"}>{fileObj[0]}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                              <Typography>
                                {fileObj[1].content}
                                {/* <IconButton onClick={() => alert(0)}>
                                  <DeleteIcon color="secondary"/>
                                </IconButton> */}
                              </Typography>
                            </ExpansionPanelDetails>
                          </ExpansionPanel>
                        ))
                      }

                      <IconButton onClick={() => this.openPopup()}>
                        <AddIcon color="secondary"/>
                      </IconButton>

                      <FormPopup 
                        action="Add"
                        type="Note" 
                        inputFields={["Note File", "Content"]}
                        cancelLabel="CANCEL"
                        submitLabel="SUBMIT"
                        fullWidth
                        isOpen = {this.state.isPopupOpen} 
                        submitPopup = {(newItemObj) => this.updateNotebook(newItemObj)} 
                        cancelPopup = {this.closePopup} />
                    </Paper>
                  </div>
                </div>
              }
            </div>
  }
}

export default withRouter(Notebook);