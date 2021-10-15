import { FC, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { register, setError, setLoading } from "../actions/userActions";
import Message from "../components/Message";
import { RootState } from "../store";

const Register: FC = () => {
  const [username, setName] = useState("");
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
    dispatch(register({ email, username, password }, () => setLoading(false)));
    <Redirect to="/" />;
  };

  return (
    <div className="signup">
      <div className="flex min-h-screen bg-white">
        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          <div className="text-left p-0 font-sans">
            <h1 className="text-gray-800 text-3xl font-medium">
              Create an account for free
            </h1>
            <h3 className="p-1 text-gray-700">
              Free forever. No payment needed.
            </h3>
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
                type="text"
                className="w-full p-2 border rounded border-gray-300 focus:ring-1"
                placeholder="User-name"
                value={username}
                onChange={(e) => setName(e.target.value)}
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

            <div className="mt-6 block p-5 text-sm md:font-sans text-xs text-gray-800">
              <input type="checkbox" className="mr-2 border-0" />
              <span>
                By creating an account you are agreeing to our
                <span className="underline">Terms and Conditions</span>
                and
                <span className="underline">Privacy Policy</span>
              </span>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="bg-gray-500 text-white w-full p-3 rounded hover:bg-red-400"
              >
                Sign up with email
              </button>
            </div>
          </form>
          <a className="" href="/signin">
            <span className="block p-5 text-center text-gray-800 text-xs">
              Already have an account?
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Register;
