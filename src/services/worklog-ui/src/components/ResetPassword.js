import { Button, Grid, TextField, Paper, Typography } from '@material-ui/core';
import React from 'react';

export default class ResetPassword extends React.Component {

    render() {
        return (
            <div className="reset-password-background">
                <Grid container spacing={0} justify="center" direction="column" alignItems="center">
                    <Paper
                        variant="elevation"
                        elevation={2}
                        className="reset-password-form">
                        <Grid item>
                            <Typography component="h5" variant="h5" style={{ marginLeft: 12 + "%" }}>
                                Forgot Password
                            </Typography>
                            <Typography component="h1" variant="subtitle2">
                                Enter Email id for resetting password.
                            </Typography>
                        </Grid>
                        <Grid item style={{ marginTop: 7 + "%" }}>
                            <form >
                                <Grid container direction="column" spacing={2} style={{ marginTop: 10 + "%" }}>
                                    <Grid item>
                                        <TextField
                                            type="email"
                                            placeholder="Email Id"
                                            fullWidth
                                            name="Email"
                                            variant="outlined"
                                            required
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            type="submit">
                                            Reset Password
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
