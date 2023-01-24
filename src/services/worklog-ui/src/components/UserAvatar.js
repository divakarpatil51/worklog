import { Avatar, Grid, Menu, MenuItem } from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import React from 'react';

export default function UserAvatar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container justify="center" style={{ marginLeft: 90 + '%' }}>
            <Grid container direction="row" justify="center">
                <Avatar aria-controls="simple-menu" aria-haspopup="true" >
                </Avatar>
                <ArrowDropDown onClick={handleClick} style={{ marginTop: 12 + '%' }}>
                </ArrowDropDown>
            </Grid >
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{ marginTop: 2 + '%' }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

        </Grid>
    )
}