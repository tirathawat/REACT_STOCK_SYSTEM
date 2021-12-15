import { AuthState, AuthStateType, AuthStateData } from "../../types/state";

const initialState: AuthState = {
  user: null,
  errorMessage: null,
  isFetching: false,
};

const authReducer = (
  state: AuthState = initialState,
  data: AuthStateData
): AuthState => {
  switch (data.type) {
    case AuthStateType.LOGIN_FETCHING:
      return { ...state, isFetching: true, errorMessage: null, user: null };
    case AuthStateType.LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: null,
        user: data.payload,
      };
    case AuthStateType.LOGIN_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: data.payload,
        user: null,
      };
    case AuthStateType.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
