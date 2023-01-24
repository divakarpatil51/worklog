import { Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import '../App.css';

export default class CreateAccount extends React.Component {

    render() {
        return (
            <div className="create-account-background">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    spacing={2}
                >
                    <Paper
                        variant="elevation"
                        elevation={2}
                        className="create-account-form">
                        <Grid item style={{ marginTop: 1 + "%", marginbottom: 25 }}>
                            <Typography component="h1" variant="h4">
                                Create a Worklog account
                                    </Typography>
                        </Grid>
                        <Grid item style={{ marginTop: 3 + "%"}}>
                            <form onSubmit={this.handleSubmit}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <TextField
                                            type="text"
                                            placeholder="Username"
                                            fullWidth
                                            name="username"
                                            variant="outlined"
                                            required
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            type="email"
                                            placeholder="Email"
                                            fullWidth
                                            name="username"
                                            variant="outlined"
                                            required
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
                                        <TextField
                                            type="password"
                                            placeholder="Confirm Password"
                                            fullWidth
                                            name="password"
                                            variant="outlined"
                                            required
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            type="submit"
                                            className="button-block"
                                        >
                                            Create Account
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        )
    }
}