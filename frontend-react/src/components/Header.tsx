import { Link } from "react-router-dom";
import Button from "./Button";

export const Header = () => {
  return (
    <header className="flex bg-gray-100 p-5 border-rounded-xl">
      <Link to="/">
        <Button title="Home" />
      </Link>
      <Link to="about">
        <Button title="About" />
      </Link>
      <Link to="connect">
        <Button title="Connect" />
      </Link>
      <div className="ml-auto">
        <Link to="signin">
          <Button title="Sign In" />
        </Link>
      </div>
    </header>
  );
};
