import React from "react";
import Account from "../account/Account";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  makeStyles,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useHistory } from "react-router";
import AccountDetailsTable from "./AccountDetailsTable";
import AddAccountDetailsForm from "./AddAccountDetailsForm";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  addButton: {
    marginTop: "30px",
    width: "200px",
    fontSize: "12px",
    whiteSpace: "nowrap",
  },
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    background: `rgba(0, 0, 0, 0.3)`,
    "align-items": "center",
  },
});
function Accountdetails() {
  const classes = useStyles();
  const username = localStorage.getItem("userName");
  const password = localStorage.getItem("password");
  const localStorageAccountDetails = JSON.parse(
    localStorage.getItem("accountDetails")
  );
  const [users, setUsers] = React.useState(
    localStorageAccountDetails ? localStorageAccountDetails : []
  );

  const [isOpen, setIsOpen] = React.useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Account />
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          className={classes.addButton}
          onClick={() => setIsOpen(true)}
        >
          Add Account Details
        </Button>
      </Box>
      {isOpen && (
        <div className={classes.modal}>
          <AddAccountDetailsForm
            users={users}
            setUsers={setUsers}
            handleClose={handleClose}
          />
        </div>
      )}
      <div class="accountDetailsTable">
        <AccountDetailsTable accountDetails={users} />
      </div>
    </div>
  );
}

export default Accountdetails;
