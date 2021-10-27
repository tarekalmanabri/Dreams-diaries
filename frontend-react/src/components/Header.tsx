import { FC, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "../actions/authActions";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import Button from "./Button";
import Avatar from "react-avatar";

export const Header: FC = () => {
  const { token } = useSelector((state: RootState) => state.auth);
  const { username } = useSelector((state: RootState) => state.user);

  const [navbarOpen, setNavbarOpen] = useState(false);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    signOut();
  };

  return (
    <header className="border-b-2 p-6 mb-3">
      <div className="flex flex-wrap items-center lg:justify-center">
        <div className="w-full flex justify-between lg:w-auto">
          <Link to="/">
            <img
              src="/img/backgrounds/logo_small.png"
              alt="logo"
              className="w-20 mr-2"
            />
          </Link>
          <button
            className="cursor-pointer text-xl px-2 rounded lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className={
            "lg:flex items-center lg:w-10/12" +
            (navbarOpen ? "flex" : " hidden")
          }
        >
          <div className="flex flex-col lg:flex-row lg:divide-x lg:divide-gray-400">
            <Link to="/">
              <Button title="Home" />
            </Link>
            <Link to="/about">
              <Button title="About" />
            </Link>
            <Link to="/connect">
              <Button title="Connect" />
            </Link>
            {token ? (
              <>
                <Link to="/dreams">
                  <Button title="Dashboard" />
                </Link>
                <Link to="/update">
                  <Button title="Update My Profile" />
                </Link>
              </>
            ) : null}
          </div>
          <div className="ml-auto flex items-center ">
            <div>
              {token ? (
                <>
                  <Avatar name={username} size="40" round={true} />
                  <Button onClick={submitHandler} title="Sign Out" />
                </>
              ) : (
                <Link to="/signin">
                  <Button title="Sign In" />
                </Link>
              )}
            </div>
            <div>
              <i className="fab fa-twitter text-red-400 hover:text-gray-700 p-1"></i>
              <i className="fab fa-facebook-f text-red-400 hover:text-gray-700 p-1"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
