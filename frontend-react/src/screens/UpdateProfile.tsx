import { FC, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUser, updateUserProfile } from "../actions/userActions";
import Button from "../components/Button";
import Input from "../components/Input";
import { RootState } from "../store";

const UpdateProfile: FC = () => {
  const { auth, user } = useSelector((state: RootState) => state);

  const [email, setEmail] = useState(user?.email ?? "");
  const [username, setUsername] = useState(user?.username ?? "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      await updateUserProfile({ email, password, username });
    }
  };

  return auth.token && user ? (
    <div className="flex min-h-screen bg-white">
      <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
        <div className="text-left p-0 font-sans"></div>
        <div className="flex flex-col">
          <form>
            <Input
              type="email"
              placeholder="New email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Input
              type="text"
              placeholder="New username"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
            />

            <Input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button
              title="Submit"
              onClick={submitHandler}
              type="submit"
            ></Button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/signin" />
  );
};
export default UpdateProfile;
