import * as actions from '../actions'

const initialState = [];

export const ProductsReducer = (products = initialState, action) => {
    const { type, payload, total, params } = action;

    switch (type) {
        case actions.FETCH_PRODUCTS_REQUEST:
            return {
                ...products,
                loading: true
            };
        case actions.FETCH_PRODUCTS_SUCCESS:
            return {
                ...products,
                loading: false,
                products: payload,
                total: total,
                params: params
            };

        default:
            return products
    }
}
