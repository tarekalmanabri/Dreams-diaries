import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import {
  User,
  SignOutData,
  SignUpData,
  SignInData,
  AuthAction,
  SET_SUCCESS,
  SET_ERROR,
  SIGN_OUT,
  SET_LOADING,
  SET_USER,
  NEED_VERIFICATION,
} from "../types";

export const register = (
  data: SignUpData,
  onError: () => void
): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      const res = await axios.post("register", data);
      if (res.data) {
        const userData: User = {
          email: data.email,
          password: data.password,
          username: data.username,
        };
        dispatch(setSuccess("You're registerd"));
        dispatch({
          type: SET_USER,
          payload: userData,
        });
      }
    } catch (err) {
      onError();
      dispatch({
        type: SET_ERROR,
        payload: "something went wrong",
      });
    }
  };
};

export const setLoading = (
  value: boolean
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
      payload: value,
    });
  };
};

export const signin = (
  data: SignInData,
  onError: () => void
): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      await axios.post("signin", data);
      dispatch(setSuccess("You're logged in"));
    } catch (err) {
      console.log(err);
      onError();
      dispatch(setError("something went wrong"));
    }
  };
};

export const signOut = (
  data: SignInData
): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      (await data.authenticated) === false;
      dispatch({ type: SIGN_OUT });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
};

export const setError = (
  msg: string
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({ type: SET_ERROR, payload: msg });
  };
};

export const setSuccess = (
  msg: string
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_SUCCESS,
      payload: msg,
    });
  };
};
