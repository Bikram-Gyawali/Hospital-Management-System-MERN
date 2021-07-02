import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {userLoginReducer, userRegisterReducer} from './reducers/userReducers'
import {hospitalLoginReducer} from './reducers/hospitalReducers'


const reducer= combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    hospitalLogin: hospitalLoginReducer
})

const initialState={}
const middleware= [thunk]

const store= createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store