import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
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
  hospitalManipulation: hospitalManipulationReducer
});

const userFromStrogae = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const hospitalFromStrogae = localStorage.getItem("hospitalInfo")
  ? JSON.parse(localStorage.getItem("hospitalInfo"))
  : null;

const initialState = {
  userLogin: {
    userInfo: userFromStrogae,
  },
  hospitalLogin: {
    hospitalInfo: hospitalFromStrogae,
  },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
