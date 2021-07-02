import {
    HOSPITAL_LOGIN_REQUEST, HOSPITAL_LOGIN_SUCCESS, HOSPITAL_LOGIN_FAIL, HOSPITAL_LOGOUT,
    HOSPITAL_REGISTER_REQUEST, HOSPITAL_REGISTER_SUCCESS, HOSPITAL_REGISTER_FAIL,
} from '../constants/hospitalConstants'

export const hospitalLoginReducer=(state={}, action)=>{
    switch(action.type){
        case HOSPITAL_LOGIN_REQUEST:
            return {loading: true}
        case HOSPITAL_LOGIN_SUCCESS:
            return {loading: false, hospitalInfo: action.payload}
        case HOSPITAL_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        case HOSPITAL_LOGOUT:
            return {}
        default:
            return state
    }
}

export const hospitalRegisterReducer= (state={}, action)=>{
    switch(action.type){
        case HOSPITAL_REGISTER_REQUEST:
            return {loading: true}
        case HOSPITAL_REGISTER_SUCCESS:
            return {loading: false, hospitalInfo: action.payload}
        case HOSPITAL_REGISTER_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
