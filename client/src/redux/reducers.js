import { combineReducers } from 'redux';
import { products } from "./ducks/products";

const appReducer = combineReducers({
  products
});

export default appReducer;
