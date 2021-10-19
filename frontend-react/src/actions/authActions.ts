import axios from "axios";
import {
  SignUpData,
  SignInData,
  AuthResposne as AuthResponse,
} from "../../types/types";
import {
  SET_ERROR,
  SET_LOADING,
  SET_SUCCESS,
  SIGN_IN,
  SIGN_OUT,
} from "../consts";
import store from "../store";
import Cookie from "js-cookie";

export const register = async (
  data: SignUpData,
  onError: () => void
): Promise<void> => {
  try {
    const res: { data: AuthResponse } = await axios.post("register", data);
    if (res.data) {
      store.dispatch({
        type: SIGN_IN,
        payload: res.data.token,
      });

      Cookie.set("token", res.data.token);
    }
  } catch (err) {
    onError();
    store.dispatch({
      type: SET_ERROR,
      payload: "something went wrong",
    });
  }
};

export const setLoading = (value: boolean): void => {
  store.dispatch({
    type: SET_LOADING,
    payload: value,
  });
};

export const signIn = async (
  data: SignInData,
  onError: () => void
): Promise<void> => {
  try {
    const user: { data: AuthResponse } = await axios.post("signin", data);
    store.dispatch({
      type: SIGN_IN,
      payload: user.data.token,
    });

    Cookie.set("token", user.data.token);
  } catch (err) {
    console.log(err);
    onError();
    setError("something went wrong");
  }
};

export const signOut = (): void => {
  store.dispatch({ type: SIGN_OUT });
  Cookie.set("token", "");
};

export const setError = (msg: string): void => {
  store.dispatch({ type: SET_ERROR, payload: msg });
};

export const setSuccess = (msg: string): void => {
  store.dispatch({
    type: SET_SUCCESS,
    payload: msg,
  });
};
