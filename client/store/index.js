import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import products from './products';
import categoryReducer from './category';
import singleProductReducer from './singleProduct';
<<<<<<< HEAD
import userOrdersReducer from './userOrders';
=======
import cartReducer from './cart';

>>>>>>> bec74be98c305a32649668b7b3d2dded57973ccf

const reducer = combineReducers({
  auth,
  category: categoryReducer,
  products,
  singleProduct: singleProductReducer,
  orders: userOrdersReducer,
  cart: cartReducer
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
