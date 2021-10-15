import { useDispatch, useSelector } from "react-redux";
import { useState, FC, FormEvent, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { RootState } from "../store";
import { setError, setLoading, signin } from "../actions/userActions";
import Message from "../components/Message";

const Signin: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { error, success } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(""));
      }
    };
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    dispatch(
      signin({ email, password, authenticated: true }, () => setLoading(false))
    );
    <Redirect to="/" />;
  };
  return (
    <div className="login">
      <div className="flex min-h-screen bg-white">
        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          <div className="text-left p-0 font-sans">
            <h1 className="text-gray-800 text-3xl font-medium">
              Login to your account
            </h1>
          </div>
          <form onSubmit={submitHandler} className="p-0">
            {error && <Message type="danger" msg={error} />}
            {success && <Message type="success" msg={success} />}
            <div className="mt-5">
              <input
                type="text"
                className="w-full p-2 border rounded border-gray-300 focus:ring-1"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <input
                type="password"
                className="w-full p-2 border rounded border-gray-300 focus:ring-1"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
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

export default Signin;
