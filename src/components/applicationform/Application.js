import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Account from '../account/Account';
import Swal from 'sweetalert2';
function Application() {
    
   
        const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
        const headerStyle = { margin: 0 }
        const avatarStyle = { backgroundColor: '#1bbd7e' }
        const marginTop = { marginTop: 5 }
         
    function sweetalertclick(){
        Swal('heloo ');
    }
    
        return (
            <div>
            <Account />
            <h1>Please fill this Application form !</h1>
                <Grid>
                    <Paper elevation={20} style={paperStyle}>
                        <Grid align='center'>
                           
                    
                            <Typography variant='caption' gutterBottom>Application form !</Typography>
                        </Grid>
                        <form>
                            <TextField fullWidth label='Name' type="[A-Z]{1}[a-z]{7}"  placeholder="Enter your name"   />
                            <TextField fullWidth label='Email' type="[A-Z]{1}[a-z]{7}[" placeholder="Enter your email"   />
                            
                            <TextField fullWidth label='CardNumber' type="number" placeholder="Enter your card number"   />
                            <TextField fullWidth label='Password' type="password" placeholder="Enter your password"  />
                            <TextField fullWidth label='PhoneNumber' type="[0-9]{10}" placeholder="Enter your PhoneNumber"  />
                            <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Type of loan</FormLabel>
                            <RadioGroup aria-label="type of loan" name="type of loan" style={{ display: 'initial' }}>
                                <FormControlLabel value="GoldLoan" control={<Radio />} label="GoldLoan" /><br></br>
                                <FormControlLabel value="carLoan" control={<Radio />} label="carLoan" />
                                <FormControlLabel value="EducationLoan" control={<Radio />} label="EducationLoan" />
                                <FormControlLabel value="BusinessLoan" control={<Radio />} label="BusinessLoan" />
                                <FormControlLabel value="HomeLoan" control={<Radio />} label="HomeLoan" />
                                <FormControlLabel value="PersonalLoan" control={<Radio />} label="PersonalLoan" />
                            </RadioGroup>
                        </FormControl>
                            <TextField fullWidth label='Loan Amount' type="number" placeholder="enter your Loanamount"  />
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="I accept the terms and conditions."  />
                            <Button type='submit' variant='contained' color='primary' onClick={alert}>submit</Button>
                        </form>
                    </Paper>
                </Grid>
            </div>
        )
    }
    
    
    
    export default Application