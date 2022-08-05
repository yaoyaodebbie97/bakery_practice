import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import products from './products';
import cart from './cart';
import categoryReducer from './category';
import order from './order'
import singleProductCart from './singleproductincart'

const reducer = combineReducers({
  auth,
  category: categoryReducer,
  products,
  cart,
  order,
  singleProductCart
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
