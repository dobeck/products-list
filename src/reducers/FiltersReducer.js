import * as actions from '../actions'

const initialState = [];

export const FiltersReducer = (filters = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case actions.FETCH_FILTERS_REQUEST:
            return {
                ...filters,
                loading: true,
            };
        case actions.FETCH_FILTERS_SUCCESS:
            return {
                ...filters,
                loading: false,
                filters: payload
            };

        default:
            return filters
    }
}
