import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../actions/products';
import { LoadingButton } from '@mui/lab';
import Paper from '@mui/material/Paper';

function MoreButton() {
    const { products, loading, total, params } = useSelector((state) => state.ProductsReducer);
    const dispatch = useDispatch();

    const hasMore = () => {
        return products?.length < total
    }

    return (
        <>
            {
                hasMore() &&
                <Paper
                    sx={ {
                        p: 2,
                        margin: '6px auto',
                        maxWidth: 600,
                        flexGrow: 1,
                        padding: '16px',
                        boxShadow: 'none',
                    } }
                >
                    <LoadingButton
                        onClick={ () => dispatch(fetchProducts({ ...params, ...{ _page: params._page + 1 } }, products)) }
                        loading={ loading }
                        variant={ 'contained' }
                    >
                        Load more
                    </LoadingButton>
                </Paper>
            }
        </>
    )
}

export default MoreButton;
