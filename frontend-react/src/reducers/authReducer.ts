import { AuthState, AuthAction } from "../../types/types";
import {
  SIGN_IN,
  SET_LOADING,
  SIGN_OUT,
  SET_ERROR,
  NEED_VERIFICATION,
  SET_SUCCESS,
} from "../consts";

const initialState: AuthState = {
  loading: false,
  error: "",
  needVerification: false,
  success: "",
  token: null,
};

export const authReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        token: null,
        loading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case NEED_VERIFICATION: {
      return {
        ...state,
        needVerification: true,
      };
    }
    case SET_SUCCESS: {
      return {
        ...state,
        success: action.payload,
      };
    }
    default:
      return state;
  }
};
