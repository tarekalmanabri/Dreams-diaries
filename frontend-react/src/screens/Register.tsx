import { FC, FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { register, setLoading } from "../actions/authActions";
import { RootState } from "../store";
import Input from "../components/Input";

const Register: FC = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token } = useSelector((state: RootState) => state.auth);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    register({ email, username, password }, () => setLoading(false));
  };

  return token ? (
    <Redirect to="/dashboard" />
  ) : (
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
            <Input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail((e.target as HTMLTextAreaElement).value)
              }
            />
            <Input
              type="text"
              placeholder="User-name"
              value={username}
              onChange={(e) => setName((e.target as HTMLTextAreaElement).value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword((e.target as HTMLTextAreaElement).value)
              }
            />
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
