import * as actions from './index';
import FiltersService from '../services/FiltersService/FiltersService';

export const fetchFilters = () => async (dispatch) => {
    dispatch({ type: actions.FETCH_FILTERS_REQUEST });

    try {
        const res = await FiltersService.get();

        dispatch({
            type: actions.FETCH_FILTERS_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
