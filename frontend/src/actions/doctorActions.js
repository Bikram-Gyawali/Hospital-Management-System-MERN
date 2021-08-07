import axios from 'axios'
import {
   DOCTOR_LOGIN_REQUEST,DOCTOR_LOGIN_SUCCESS,DOCTOR_LOGIN_FAIL,
   DOCTOR_REGISTER_REQUEST,DOCTOR_REGISTER_SUCCESS,DOCTOR_REGISTER_FAIL,DOCTOR_LOGOUT,
} from '../constants/doctorConstants'


export const doctorLoginAction = (email, password) => async (
    dispatch,
    getState
) => {
    try {
        dispatch({ type: DOCTOR_LOGIN_REQUEST });
        const { data } = await axios.post(
            "http://localhost:5000/api/doctors/loginHospital",
            {
                email,
                password,
            }
        );
        console.log(data);

        dispatch({
            type: DOCTOR_LOGIN_SUCCESS,
            payload: data,
        });

        //save loginuser to localstorage
        // localStorage.setItem("doctorInfo", JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: DOCTOR_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });

        throw new Error(error);
    }
};


export const doctorRegisterAction = (
    name,
    email,
    speciality,
    contact,
    organization,
    graduatedFrom,
    password
) => async (dispatch) => {
    try {
        dispatch({
            type: DOCTOR_REGISTER_REQUEST,
        });

        const {
            data,
        } = await axios.post(
            "http://localhost:5000/api/doctor/doc_register",
            {
                name,
                email,
                speciality,
                contact,
                organization,
                graduatedFrom,
                password
            }
        );
        console.log(data);
        dispatch({
            type: DOCTOR_REGISTER_SUCCESS,
            payload: data,
        });
        // const data = { ...others, password };

        // localStorage.setItem("doctorInfo", JSON.stringify(data));
    } catch (err) {
        dispatch({
            type: DOCTOR_REGISTER_FAIL,
            payload:
                err.response && err.response.data.message
                    ? err.response.data.message
                    : err.message,
        });
        throw new Error(err)
    }
};
