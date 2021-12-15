import { User } from "./user";

export type AuthState = {
  errorMessage: string | null;
  isFetching: boolean;
  user: User | null;
};

export enum AuthStateType {
  LOGIN_FETCHING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
}

export type AuthStateData = {
  type: AuthStateType;
  payload: any;
};
