import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography, ButtonBase } from '@mui/material';
import { Box } from '../'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function ProductBox({ product }) {
    const { thumbnail, title, brand, description, category, price } = product
    return (
        <Box>
            <Grid container spacing={ 2 }>
                <Grid item>
                    <ButtonBase sx={ { width: 128, height: 128 } }>
                        <Img alt={ title } src={ thumbnail }/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={ 12 } sm container>
                    <Grid item xs container direction="column" spacing={ 2 }>
                        <Grid item xs>
                            <Typography gutterBottom variant="subtitle1" component="h3">
                                { title }
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" sx={ { marginBottom: 1 } }>
                                { brand }
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                { description }
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                { category }
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2" component="div">
                            ${ price }
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ProductBox;
