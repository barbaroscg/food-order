import { applyMiddleware, combineReducers, createStore } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { getAllFoodsReducer } from './reducers/foodReducers';
import { cartReducer } from './reducers/cartReducer';

const finalReducer = combineReducers({
  getAllFoodsReducer: getAllFoodsReducer,
  cartReducer: cartReducer,
});

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
};
const composeEnhancers = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

// import { combineReducers, applyMiddleware } from 'redux';

// import { createStore } from 'redux';

// import thunk from 'redux-thunk';

// import { composeWithDevTools } from 'redux-devtools-extension';
// import { getAllFoodsReducer } from './reducers/foodReducers';

// const finalReducer = combineReducers({
//   getAllFoodsReducer: getAllFoodsReducer,
// });

// const composeEnhancers = composeWithDevTools({});
// const initialState = {};

// const store = createStore(
//   finalReducer,
//   initialState,
//   composeEnhancers(applyMiddleware(thunk))
// );

// export default store;
