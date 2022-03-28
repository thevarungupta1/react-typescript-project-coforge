import { combineReducers } from 'redux';
import { productsReducer, selectedProductReducer } from './product-reducer';

const reducers = combineReducers({
    allProduct: productsReducer,
    product: selectedProductReducer
})

export default reducers;