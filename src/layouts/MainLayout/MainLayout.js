import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

function MainLayout() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography>Products list</Typography>
                </Toolbar>
            </AppBar>
            <Outlet/>
        </>
    )
}

export default MainLayout;
