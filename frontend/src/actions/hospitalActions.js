import axios from "axios";
import { axiosRequest } from "utils/axiosRequest";
import {
  HOSPITAL_LOGIN_REQUEST,
  HOSPITAL_LOGIN_SUCCESS,
  HOSPITAL_LOGIN_FAIL,
  HOSPITAL_REGISTER_REQUEST,
  HOSPITAL_REGISTER_SUCCESS,
  HOSPITAL_REGISTER_FAIL,
  HOSPITAL_PROFILE_EDIT,
  HOSPITAL_LOGOUT,
  HOSPITAL_EVENTS_ADD,
} from "../constants/hospitalConstants";

const BASE_URL = `http://localhost:5000/api`;

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
    // localStorage.setItem("hospitalInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: HOSPITAL_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

    throw new Error(error);
  }
};
export const hospitalLogOutAction = () => (dispatch) => {
  dispatch({
    type: HOSPITAL_LOGOUT,
  });
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

    // localStorage.setItem("hospitalInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: HOSPITAL_REGISTER_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
    throw new Error(err);
  }
};





export const updateHospitalDescription = (id, description) => async (
  dispatch
) => {
  let reqBody = {
    url: `${BASE_URL}/hospitals/${id}/updateHospital`,
    method: "put",
    body: description,
  };

  let [data, error] = await axiosRequest(reqBody);
  if (data) {
    console.log(data);
    dispatch({
      type: HOSPITAL_PROFILE_EDIT,
      payload: {
        hospitalDescription: description,
      },
    });
  }
  if (error) {
    console.log(error);
    throw new Error(error);
  }
};


// date: "2022-01-01T00:00:00.000Z"
// desc: "lkj"
// eventName: "Vaccine"
// _id: "610ea4c184f799302438e298"

export const addHospitalEvents = (id, eventName, date, desc) => async (
  dispatch
) => {
  console.log("helo", id);
  let reqBody = {
    url: `${BASE_URL}/hospitals/${id}/events/addEvents`,
    method: "post",
    body: { eventName, date, desc },
  };
  // let [data, error] = await axiosRequest(reqBody);
  try {
    const data = await axios.post(reqBody.url, reqBody.body);
    console.log("Success")
    dispatch({
      type: HOSPITAL_EVENTS_ADD,
        payload: {
        event: { eventName, date, desc, _id: Math.floor(Math.random()*100_000).toString() },
      },
    });

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
