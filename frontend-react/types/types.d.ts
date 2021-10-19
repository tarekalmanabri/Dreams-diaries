export interface AuthResposne {
  username: string;
  email: string;
  password: string;
  token: string;
}

export interface User {
  username: string;
  email: string;
  password: string;
  token: string;
}

export interface AuthState {
  loading: boolean;
  error: string;
  needVerification: boolean;
  success: string;
  token: string | null;
}

export interface UserState {
  user?: User;
}

export interface SignUpData {
  username: string;
  email: string;
  password: string;
}

/**
 * Sent to /auth/signin
 */
export interface SignInData {
  email: string;
  password: string;
}

//Actions
interface SignInAction {
  type: "SIGN_IN";
  payload: string;
}

interface SetLoadingAction {
  type: "SET_LOADING";
  payload: boolean;
}

interface SignOutAction {
  type: "SIGN_OUT";
}

interface SetErrorAction {
  type: "SET_ERROR";
  payload: string;
}

interface NeedVerificationAction {
  type: "NEED_VERIFICATION";
}

interface SetSuccessAction {
  type: "SET_SUCCESS";
  payload: string;
}

export type AuthAction =
  | SignInAction
  | SetErrorAction
  | SetLoadingAction
  | SignOutAction
  | NeedVerificationAction
  | SetSuccessAction;

interface SaveUserAction {
  type: "SAVE_USER";
  payload: User;
}

export type UserAction = SaveUserAction;
