import { Link } from "react-router-dom";
import Button from "./Button";

export const Header = () => {
  return (
    <header className="bg-gray-100 p-5 border-rounded-xl">
      <Link to="/">
        <Button title="Home" />
      </Link>
      <Link to="about">
        <Button title="About" />
      </Link>
    </header>
  );
};
