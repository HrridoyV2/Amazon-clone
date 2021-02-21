import { combineReducers } from 'redux';
import { productsReducer } from './allProducts/productsReducer';
import { basketReducer } from './basket/basketReducer';

const rootReducer = combineReducers({
    basket: basketReducer,
    products: productsReducer
})

export default rootReducer