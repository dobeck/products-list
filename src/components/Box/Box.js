import React from 'react';
import { Paper } from '@mui/material';

function Box({ children }) {
    return (
        <Paper
            sx={ {
                p: 2,
                margin: '16px auto',
                maxWidth: 600,
                flexGrow: 1,
                padding: '16px',
            } }
        >
            { children }
        </Paper>
    )
}

export default Box;
