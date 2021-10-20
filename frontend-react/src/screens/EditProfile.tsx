import { FC } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const EditProfile: FC = () => {
  return (
    <div className="h-screen bg-white">
      <div className="flex flex-col">
        <Link to="email">
          <Button title="New Email" />
        </Link>
        <Link to="username">
          <Button title="New Username" />
        </Link>
        <Link to="password">
          <Button title="New Password" />
        </Link>
      </div>
    </div>
  );
};
export default EditProfile;
