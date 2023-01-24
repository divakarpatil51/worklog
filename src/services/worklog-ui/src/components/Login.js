import { Button, Grid, Link, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import '../App.css';

class LoginComponent extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push("/dashboard")
    }

    render() {
        return (
            <div className="login-form">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    spacing={2}>
                    <Paper
                        variant="elevation"
                        elevation={2}
                        className="login-background">
                        <Grid item style={{marginLeft: 38 + "%"}}>
                            <Typography component="h5" variant="h5">
                                LOGIN
                            </Typography>
                        </Grid>   
                        <Grid item style={{marginTop: 10 + "%"}}>
                            <form onSubmit={this.handleSubmit}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <TextField
                                            type="email"
                                            placeholder="Email"
                                            fullWidth
                                            name="username"
                                            variant="outlined"
                                            required
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            type="password"
                                            placeholder="Password"
                                            fullWidth
                                            name="password"
                                            variant="outlined"
                                            required
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Link href="/reset-password" variant="body2">
                                            Forgot Password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            className="button-block">
                                            Login
                                         </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                        <Grid item style={{marginTop: 10 + "%"}}>
                            <Typography>
                                Don't have an account yet?
                            </Typography>
                            <Link href="/create-account" variant="body1">
                                Create your account
                            </Link>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        )
    }
}

export default LoginComponent;