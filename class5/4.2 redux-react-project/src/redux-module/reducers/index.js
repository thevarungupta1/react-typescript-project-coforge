import { combineReducers } from 'redux';
import { productsReducer, selectedProductReducer } from './product-reducer';

const reducers = combineReducers({
    allProducts: productsReducer,
    product: selectedProductReducer
})

export default reducers;