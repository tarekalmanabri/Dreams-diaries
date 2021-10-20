import {
  SET_ERROR,
  SET_LOADING,
  SET_SUCCESS,
  SIGN_IN,
  SIGN_OUT,
} from "../consts";
import store from "../store";
import Cookie from "js-cookie";
import { authApi, SignInData, SignUpData } from "../services/api/authApi";

export const register = async (
  data: SignUpData,
  onError: () => void
): Promise<void> => {
  try {
    const res = await authApi.signUp(data);

    if (res) {
      store.dispatch({
        type: SIGN_IN,
        payload: res.token,
      });

      Cookie.set("token", res.token);
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
    const res = await authApi.signIn(data);
    store.dispatch({
      type: SIGN_IN,
      payload: res.token,
    });

    Cookie.set("token", res.token);
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

// Todo: move this to a separate store for notifications
export const setError = (msg: string): void => {
  store.dispatch({ type: SET_ERROR, payload: msg });
};

export const setSuccess = (msg: string): void => {
  store.dispatch({
    type: SET_SUCCESS,
    payload: msg,
  });
};
