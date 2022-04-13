import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import makeStyles from "./Styles";
import Input from './Input'

const Auth = () => {
    const classes = makeStyles();

    const isSignUp = false;

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = () => {

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
                </Grid>
            </form>
        </Paper>
    </Container>
  )
}

export default Auth