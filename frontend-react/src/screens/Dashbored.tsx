import { FC } from "react";
import { Link } from "react-router-dom";

const Dashbored: FC = () => {
  return (
    <div className="mt-4">
      <header className="bg-white shadow">
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
  );
};

export default Dashbored;
