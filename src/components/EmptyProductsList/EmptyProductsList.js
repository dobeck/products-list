import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '../'

function EmptyProductsList() {
    return (
        <Box>
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 } sm container>
                    <Grid item xs container direction="column" spacing={ 2 }>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="h3">
                                No products found :(
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default EmptyProductsList;
