import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productListReducer from "../Services/ProductList/reducer";
import productDetailReducer from "../Services/ProductDetails/reducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  productListReducer,
  productDetailReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;



