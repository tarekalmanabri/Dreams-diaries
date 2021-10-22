import { useSelector } from "react-redux";
import { useState, FC, FormEvent } from "react";
import { Redirect } from "react-router-dom";
import { RootState } from "../store";
import { setLoading, signIn } from "../actions/authActions";
import { getUser } from "../actions/userActions";
import Input from "../components/Input";

const SignIn: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { auth, user } = useSelector((state: RootState) => state);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    await signIn({ email, password }, () => setLoading(false));
    getUser();
  };

  return auth.token && user.user ? (
    <Redirect to="/dashboard" />
  ) : (
    <div className="login">
      <div className="flex min-h-screen bg-white">
        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          <div className="text-left p-0 font-sans">
            <h1 className="text-gray-800 text-3xl font-medium">
              Login to your account
            </h1>
          </div>
          <form onSubmit={submitHandler} className="p-0">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <div className="mt-10">
              <button
                type="submit"
                className="bg-gray-500 text-white w-full p-3 rounded hover:bg-red-400"
              >
                Login
              </button>
            </div>
          </form>
          <span className="block p-5 text-center text-gray-800 text-xs">
            Don't have an account?
            <a href="/register">
              <span className="underline">Signup here</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
