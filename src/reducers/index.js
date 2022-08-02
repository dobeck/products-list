import { combineReducers } from 'redux';
import { ProductsReducer } from './ProductsReducer';
import { FiltersReducer } from './FiltersReducer';

const rootReducers = combineReducers({
    ProductsReducer,
    FiltersReducer,
});

export default rootReducers;
