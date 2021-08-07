import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import {doctorLoginReducer, doctorRegisterReducer } from 'reducers/doctorReducres'
import {cartReducer} from './reducers/cartReducers'
import {
  hospitalLoginReducer,
  hospitalRegisterReducer,
  hospitalManipulationReducer
} from "./reducers/hospitalReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  hospitalLogin: hospitalLoginReducer,
  hospitalRegister: hospitalRegisterReducer,
  hospitalManipulation: hospitalManipulationReducer,
  doctorLogin: doctorLoginReducer,
  doctorRegister: doctorRegisterReducer,
  cart: cartReducer
});

const cartFromStorage= localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): []

// const userFromStrogae = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;
// const hospitalFromStrogae = localStorage.getItem("hospitalInfo")
//   ? JSON.parse(localStorage.getItem("hospitalInfo"))
//   : null;

const initialState = {
  // userLogin: {
  //   userInfo: userFromStrogae,
  // },
  // hospitalLogin: {
  //   hospitalInfo: hospitalFromStrogae,
  // },
  cart: {
    cartItems: cartFromStorage
  }
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
