import { AuthState, AuthStateType, AuthStateData } from "../../types/state";
import { RegisterData, LoginData, User } from "../../types/user";
import AuthProvider from "../../providers/auth.provider";

type AuthDispatch = (arg: any) => AuthState;

export const setStateToFetching = (): AuthStateData => ({
  type: AuthStateType.LOGIN_FETCHING,
  payload: null,
});

export const setStateToSuccess = (user: User): AuthStateData => ({
  type: AuthStateType.LOGIN_SUCCESS,
  payload: user,
});

export const setStateToFailed = (errorMessage: string): AuthStateData => ({
  type: AuthStateType.LOGIN_FAIL,
  payload: errorMessage,
});

export const setStateToLogout = (): AuthStateData => ({
  type: AuthStateType.LOGOUT,
  payload: null,
});

export const login = (data: LoginData, navigate: any) => {
  return (dispatch: AuthDispatch) => {
    dispatch(setStateToFetching());
    var auth: AuthProvider = new AuthProvider();
    auth
      .login(data)
      .then((user: User) => {
        dispatch(setStateToSuccess(user));
        navigate("/stock");
      })
      .catch((error: Error) => {
        dispatch(setStateToFailed(error.message));
      });
  };
};

export const register = (data: RegisterData) => {
  return (dispatch: AuthDispatch) => {
    var auth: AuthProvider = new AuthProvider();
    auth
      .register(data)
      .then((user: User) => {
        dispatch(setStateToSuccess(user));
      })
      .catch((error: Error) => {
        dispatch(setStateToFailed(error.message));
      });
  };
};

export const logout = (navigate: any) => {
  return (dispatch: AuthDispatch) => {
    dispatch(setStateToLogout());
    navigate("/login");
  };
};

export const setSuccess = (user: User) => {
  return (dispatch: AuthDispatch) => {
    dispatch(setStateToSuccess(user));
  };
};
