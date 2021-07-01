import axios from 'axios'
import {
    HOSPITAL_LOGIN_REQUEST, HOSPITAL_LOGIN_SUCCESS, HOSPITAL_LOGIN_FAIL, HOSPITAL_LOGOUT,
    // HOSPITAL_REGISTER_REQUEST, HOSPITAL_REGISTER_SUCCESS, HOSPITAL_REGISTER_FAIL,
} from '../constants/hospitalConstants'

export const hospitalLoginAction = (email, password) => async (dispatch, getState) => {
    try {
        dispatch({ type: HOSPITAL_LOGIN_REQUEST })
        const { data } = await axios.post('http://localhost:5000/api/hospitals/loginHospital', { email, password })
        console.log(data)

        dispatch({
            type: HOSPITAL_LOGIN_SUCCESS,
            payload: data
        })
        //save loginuser to localstorage
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: HOSPITAL_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message
                : error.message
        })
    }
}
