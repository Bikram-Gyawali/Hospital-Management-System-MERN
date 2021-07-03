import axios from "axios";
import {
    HOSPITAL_LOGIN_REQUEST, HOSPITAL_LOGIN_SUCCESS, HOSPITAL_LOGIN_FAIL,
    HOSPITAL_REGISTER_REQUEST, HOSPITAL_REGISTER_SUCCESS, HOSPITAL_REGISTER_FAIL,
} from '../constants/hospitalConstants'

export const hospitalLoginAction = (email, password) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({ type: HOSPITAL_LOGIN_REQUEST });
    const { data } = await axios.post(
      "http://localhost:5000/api/hospitals/loginHospital",
      {
        email,
        password,
      }
    );
    console.log(data);

    dispatch({
      type: HOSPITAL_LOGIN_SUCCESS,
      payload: data,
    });
    //save loginuser to localstorage
    localStorage.setItem("hospitalInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: HOSPITAL_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const hospitalRegisterAction = (
  name,
  email,
  password,
  contact1,
  contact2
) => async (dispatch) => {
  try {
    dispatch({
      type: HOSPITAL_REGISTER_REQUEST,
    });

    const {
      data,
    } = await axios.post(
      "http://localhost:5000/api/hospitals/registerHospital",
      { name, email, password, contact1, contact2 }
    );
    console.log(data);
    dispatch({
      type: HOSPITAL_REGISTER_SUCCESS,
      payload: data,
    });
    // const data = { ...others, password };

    localStorage.setItem("hospitalInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: HOSPITAL_REGISTER_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
