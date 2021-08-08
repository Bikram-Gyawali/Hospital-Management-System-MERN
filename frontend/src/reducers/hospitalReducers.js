import {
  HOSPITAL_LOGIN_REQUEST,
  HOSPITAL_LOGIN_SUCCESS,
  HOSPITAL_LOGIN_FAIL,
  HOSPITAL_LOGOUT,
  HOSPITAL_REGISTER_REQUEST,
  HOSPITAL_REGISTER_SUCCESS,
  HOSPITAL_REGISTER_FAIL,
  HOSPITAL_PROFILE_EDIT,
  HOSPITAL_EVENTS_ADD,
} from "../constants/hospitalConstants";

const initialState = {
  hospitalInfo: {},
  loading: false,
  error: "",
};

export const hospitalLoginReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case HOSPITAL_LOGIN_REQUEST:
      return { loading: true };
    case HOSPITAL_LOGIN_SUCCESS:
      return { loading: false, hospitalInfo: action.payload };
    case HOSPITAL_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case HOSPITAL_LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
};

export const hospitalRegisterReducer = (
  state = { ...initialState },
  action
) => {
  switch (action.type) {
    case HOSPITAL_REGISTER_REQUEST:
      return { loading: true };
    case HOSPITAL_REGISTER_SUCCESS:
      return { loading: false, hospitalInfo: action.payload };
    case HOSPITAL_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

let initialHospitalState = { hospitalInfo: {}, loading: false, error: "" };


export const hospitalManipulationReducer = (
  state = { ...initialHospitalState },
  action
) => {
  switch (action.type) {
    case HOSPITAL_LOGIN_SUCCESS:
      return { ...state, hospitalInfo: action.payload };
    case HOSPITAL_PROFILE_EDIT:
      return {
        ...state,
        hospitalInfo: {
          ...state.hospitalInfo,
          hospitalDescription: action.payload.hospitalDescription,
        },
      };
    case HOSPITAL_EVENTS_ADD:
      return {
        ...state,
        events: {
          ...state.hospitalInfo,
          events: [...state.hospitalInfo.events, action.payload.event],
        },
      };
    default:
      return { ...state };
  }
};
