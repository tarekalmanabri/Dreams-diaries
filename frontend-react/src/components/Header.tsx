import { FC, FormEvent } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../actions/authActions";
import { RootState } from "../store";
import Button from "./Button";

export const Header: FC = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    signOut();
  };

  return (
    <header className="border-b-2 p-6">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/img/backgrounds/logo_small.png"
            alt="logo"
            className="w-20 mr-2"
          />
        </Link>
        <div className="divide-x divide-gray-400">
          <Link to="/">
            <Button title="Home" />
          </Link>
          <Link to="about">
            <Button title="About" />
          </Link>
          <Link to="connect">
            <Button title="Connect" />
          </Link>
          {token ? (
            <>
              <Link to="dashboard">
                <Button title="Dashboard" />
              </Link>
              <Link to="update">
                <Button title="Update My Profile" />
              </Link>
            </>
          ) : null}
        </div>
        <div className="ml-auto space-x-4">
          {token ? (
            <Button onClick={submitHandler} title="Sign Out" />
          ) : (
            <Link to="signin">
              <Button title="Sign In" />
            </Link>
          )}
          <i className="fab fa-twitter text-red-400 hover:text-gray-700"></i>
          <i className="fab fa-facebook-f text-red-400 hover:text-gray-700"></i>
        </div>
      </div>
    </header>
  );
};
