import {
    DOCTOR_LOGIN_REQUEST, DOCTOR_LOGIN_SUCCESS, DOCTOR_LOGIN_FAIL, DOCTOR_LOGOUT,
    DOCTOR_REGISTER_REQUEST, DOCTOR_REGISTER_SUCCESS, DOCTOR_REGISTER_FAIL
} from '../constants/doctorConstants'


const initialState = {
    doctorInfo: {},
    loading: false,
    error: ''
}



export const doctorLoginReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case DOCTOR_LOGIN_REQUEST:
            return { loading: true }
        case DOCTOR_LOGIN_SUCCESS:
            return { loading: false, doctorInfo: action.payload }
        case DOCTOR_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case DOCTOR_LOGOUT:
            return { ...initialState }
        default:
            return state
    }
}



export const doctorRegisterReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case DOCTOR_REGISTER_REQUEST:
            return { loading: true }
        case DOCTOR_REGISTER_SUCCESS:
            return { loading: false, doctorInfo: action.payload }
        case DOCTOR_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
