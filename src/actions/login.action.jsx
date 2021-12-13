import {
  LOGIN_FAIL,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../constants/constants";

export const setStateToFetching = () => ({
  type: LOGIN_FETCHING,
});

export const setStateToSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setStateToFailed = (payload) => ({
  type: LOGIN_FAIL,
  payload,
});

export const setStateToLogout = () => ({
  type: LOGOUT,
});

export const login = ({ username, password, navigate }) => {
  return (dispatch) => {
    dispatch(setStateToFetching());
    setTimeout(() => {
      dispatch(setStateToSuccess("token"));
      navigate("/stock");
    }, 2000);
  };
};

export const logout = (navigate) => {
  return (dispatch) => {
    dispatch(setStateToLogout());
    navigate("/login");
  };
};

export const setSuccess = (token) => {
  return (dispatch) => {
    dispatch(setStateToSuccess(token));
  };
};

export const hasError = (errorMessage) => {
  return (dispatch) => {
    dispatch(setStateToFailed(errorMessage));
  };
};
