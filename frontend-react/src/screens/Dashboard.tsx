import { FC } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { RootState } from "../store";

const Dashboard: FC = () => {
  const { auth, user } = useSelector((state: RootState) => state);

  return auth.token && user ? (
    <div className="mt-4">
      <header className="bg-white shadow">
        <p className="text-xl ml-7">
          Welcome, <span className="text-red-400">{user.username}</span>
        </p>
        <div className="flex max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <Link
            to="/create"
            className="
            ml-auto
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded-full
          "
          >
            + New Dream
          </Link>
        </div>
      </header>
    </div>
  ) : (
    <Redirect to="/signin" />
  );
};

export default Dashboard;
