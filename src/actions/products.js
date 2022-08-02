import * as actions from './index';
import ProductsService from '../services/ProductsService/ProductsService';

export const fetchProducts = (params = {}, products = [], useFilters = false) => async (dispatch) => {
    dispatch({ type: actions.FETCH_PRODUCTS_REQUEST });

    try {
        const res = await ProductsService.get(params);

        dispatch({
            type: actions.FETCH_PRODUCTS_SUCCESS,
            payload: useFilters ? res.data : [ ...products, ...res.data ],
            total: res.headers['x-total-count'],
            params: params
        });
    } catch (err) {
        console.log(err);
    }
};
