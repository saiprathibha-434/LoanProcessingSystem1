import React from "react";
import { Grid, Paper, Typography, TextField, Button, makeStyles, Box } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  closeButton: {
    marginTop: "30px",
    width: "fit-content",
    fontSize: "12px",
    whiteSpace: "nowrap",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formSubmitted: {
      marginBottom: '50px',
  }
});

export default function AddAccountDetailsForm({ users, setUsers, handleClose }) {
    const classes = useStyles();
    const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [accountDetails, setAccountDetails] = React.useState({
    userName: "",
    userEmail: "",
    phoneNumber: "",
    gender: "",
    loanAmount: "",
    loantype: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails({ ...accountDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    //   e.preventDefault();
    const newUsers = [...users, accountDetails];
    setUsers(newUsers);
    localStorage.setItem("accountDetails", JSON.stringify(newUsers));
    setIsSubmitted(true);
  };


  return (
    <Grid container>
      <Paper
        elevation={6}
        style={{ width: "60%", margin: "50px auto", padding: "20px" }}
      >
        <Grid align="center">
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="secondary"
              className={classes.closeButton}
              onClick={() => handleClose ? handleClose() : () => {}}
            ><CloseIcon /></Button>
          </Box>
          { !isSubmitted && <Typography variant="caption" gutterBottom>
            Please fill this form !
          </Typography> }
        </Grid>
        { isSubmitted ? <div className={classes.formSubmitted}>Form Submitted Successfully!</div> :
        <form method="post">
          <TextField
            fullWidth
            label="Name"
            name="userName"
            placeholder="Enter your name"
            value={accountDetails.userName}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="loan Amount"
            name="loanAmount"
            placeholder="Enter Loan Amount"
            value={accountDetails.loanAmount}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="loanType"
            name="loanType"
            placeholder="Enter Loan Type"
            value={accountDetails.loanType}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Email"
            name="userEmail"
            placeholder="Enter your email"
            value={accountDetails.userEmail}
            onChange={handleInputChange}
          />
          <FormControl component="fieldset" onSubmit={handleSubmit}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label="CardNumber"
            name="cardNumber"
            placeholder="Enter your card number"
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="PhoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm your password"
            onChange={handleInputChange}
          />

          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="I accept the terms and conditions."
          />
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Details
          </Button>
        </form>
        }
        </Paper>
    </Grid>
  );
}