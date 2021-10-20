import realAxios from "axios";

export interface AuthResponse {
  username: string;
  email: string;
  password: string;
  token: string;
}

export interface SignUpData {
  username: string;
  email: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export const authApi = {
  async signUp(data: SignUpData): Promise<AuthResponse> {
    const res = await realAxios.post("register", data);

    return res.data as AuthResponse;
  },

  async signIn(data: SignInData): Promise<AuthResponse> {
    const res = await realAxios.post("signin", data);

    return res.data as AuthResponse;
  },
};
