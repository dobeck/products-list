import React, { useEffect } from 'react';
import _ from 'underscore';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilters } from '../../actions/filters';
import { fetchProducts } from '../../actions/products';

function Filters() {
    const { filters } = useSelector((state) => state.FiltersReducer);
    const { params } = useSelector((state) => state.ProductsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilters());
    }, [])

    const handleOnChange = (name, value) => {
        dispatch(fetchProducts({
            ...params,
            ...{ _page: 1 },
            ...{ [name]: value ? _.isArray(value) ? _.pluck(value, 'id') : value.id : null }
        }))
    }

    return (
        <>
            {
                filters?.length > 0 &&
                filters.map(filter => {
                    return (
                        <Autocomplete
                            key={ filter.key }
                            name={ filter.key }
                            options={ filter.data }
                            multiple={ filter.multiple }
                            renderInput={ (params) => <TextField { ...params } label={ filter.label }/> }
                            onChange={ (event, value) => handleOnChange(filter.key, value) }
                            sx={ {
                                p: 2,
                                margin: 'auto',
                                maxWidth: 630,
                                flexGrow: 1,
                            } }
                        />
                    )
                })
            }
        </>
    )
}

export default Filters
