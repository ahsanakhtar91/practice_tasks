import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from "react-router-dom";
import GistAPIUtils from "../utils/GistAPIUtils";

export default class NotebookTable extends React.Component 
{
  constructor()
  {
    super();  
  }

  deleteNotebook = (id) =>
  {
    GistAPIUtils.deleteNotebook(id)
      .then((successResponse) =>
      {
        this.props.updateAppState({loggedIn: true, allNotebooks: null});
      })
      .catch((errorResponse) =>
      {
        console.log('err_delete_notebook ==> ', errorResponse);
      });
  }

  render() 
  {
    return  <Paper>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">#</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Status</TableCell>
                    <TableCell align="left">Notes</TableCell>
                    <TableCell align="left">Created At</TableCell>
                    <TableCell align="left">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    this.props.tableData.map((row, i) => 
                    (
                      <TableRow key={i}>
                        <TableCell align="left">{i+1}</TableCell>
                        <TableCell align="left">
                          <Link to={"/notebook/" + row.id}> {row.description} </Link>
                        </TableCell>
                        <TableCell align="left">{(row.public) ? "Public" : "Private"}</TableCell>
                        <TableCell align="left">{Object.keys(row.files).length}</TableCell>
                        <TableCell align="left">{new Date(row.created_at).toLocaleString()}</TableCell>
                        <TableCell align="left">
                            <IconButton onClick={() => this.deleteNotebook(row.id)}>
                              <DeleteIcon color="secondary"/>
                            </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </Paper>;
  }
}