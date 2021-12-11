import {
  LOGIN_FAIL,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../constants/constants";

const initialState = {
  result: null,
  error: false,
  isFetching: false,
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_FETCHING:
      return { ...state, isFetching: true, error: false, result: null };
    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, error: false, result: payload };
    case LOGIN_FAIL:
      return { ...state, isFetching: false, error: true, result: payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;
