import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import Icon from './Icon'
import {GoogleLogin} from 'react-google-login'
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import makeStyles from "./Styles";
import Input from './Input'

const Auth = () => {
    const classes = makeStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(true);


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = () => {

    }
    
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const switchMode = () => {
        setIsSignUp(!isSignUp)
        handleShowPassword(false)
    }

    const googleSuccess = (res) => {
        console.log('res', res);
    }
    const googleFailure = () => {
        console.log("Google Sign In Failed");
    }

  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">
                {isSignUp ? 'Sign Up' : 'Sign In'}
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}> 
                <Grid container spacing={2}>
                    {
                        isSignUp && (
                            <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} half/>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} half/>
                            </>
                        )
                    }
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'Text' : 'password'} handleShowPassword={handleShowPassword} />
                    {isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                </Grid>
                <GoogleLogin 
                    clientId='GOOGLE ID'
                    render={(renderProps) => (
                        <Button
                            className={classes.googleButton}
                            color="primary" 
                            fullWidth onClick={renderProps.onClick} 
                            disabled={renderProps.disabled} 
                            startIcon={<Icon/>} 
                            variant="contained">
                            Google Sign In
                        </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                />
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    {isSignUp ? 'Sign Up' : "Sign In"}
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>
                            { isSignUp ? 'Already have an Account? Sign In' : "Don't have an Account? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth