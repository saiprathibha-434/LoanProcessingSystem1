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

export default function Admin({accountDetails = []}) {
  const classes = useStyles();

  const renderTableRows = () => {
      return accountDetails.map((row, index) => {
          return <TableRow key={row.index}>
          <TableCell component="th" scope="row">
            {index + 1}
          </TableCell>
          <TableCell align="right">{row.userName}</TableCell>
          <TableCell align="right">{row.userEmail}</TableCell>
          <TableCell align="right">{row.password}</TableCell>
          <TableCell align="right">{row.confirmPassword}</TableCell>
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
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Confirm Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { renderTableRows() }
        </TableBody>
      </Table>
    </TableContainer>
  );
}




























// import React,{Component} from 'react'
// import {Link,Redirect} from 'react-router-dom'
// export default class Admin extends Component{
//     constructor(props){
//         super(props)
//         const token = localStorage.getItem("token")

//         let loggedIn = true
//         if(token == null){
//         loggedIn= false
//         }
//         this.state ={
//             loggedIn
//     }
    
//     }
//     render(){
//         if(this.state.loggedIn === false){
//             return<Redirect to="/account"/>
//         }
//         return(
//             <div>
//             <h1>This is an Admin page</h1> 
//             <Link to="/logout">Logout</Link>
//             </div>
//         )
//     }
// }