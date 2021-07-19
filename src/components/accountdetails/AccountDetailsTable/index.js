import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    width: '100%',
    
  },
  paper: {
    width: '90%',
    margin: '20px 5%',
  }
});

export default function AccountDetailsTable({accountDetails = []}) {
  const classes = useStyles();

  const renderTableRows = () => {
      return accountDetails.map((row, index) => {
          return <TableRow key={row.index}>
          <TableCell component="th" scope="row">
            {index + 1}
          </TableCell>
          <TableCell align="right">{row.userName}</TableCell>
          <TableCell align="right">{row.userEmail}</TableCell>
      
          <TableCell align="right">{row.phoneNumber}</TableCell>
         
          <TableCell align="right">{row.loanAmount}</TableCell>
          <TableCell align="right">{row.loantype}</TableCell>
        </TableRow>
      })
  }
  return (
    <TableContainer component={Paper} className={classes.paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl.No.</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">User Email</TableCell>
           
            <TableCell align="right">phoneNumber</TableCell>
            <TableCell align="right">loanAmount</TableCell>
            <TableCell align="right">loan type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { renderTableRows() }
        </TableBody>
      </Table>
    </TableContainer>
  );
}