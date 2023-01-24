import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import '../App.css';
import UserAvatar from './UserAvatar';


export default function TopBar() {

    return (
    <div >
        <AppBar position="static" alignitems="center" color="primary">
            <Toolbar>
                <Grid container justify="center" wrap="wrap">
                    <Grid item>
                        <Typography variant="h6">WorkLog</Typography>
                    </Grid>
                </Grid>
                <UserAvatar />
            </Toolbar>
        </AppBar>

    </div>
    )
}