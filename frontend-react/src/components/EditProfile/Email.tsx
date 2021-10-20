import { FC } from "react";
import Input from "../Input";

const Email: FC = () => {
  return (
    <div>
      <div className="flex min-h-screen bg-white">
        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
          <Input type="text" placeholder="New Email" />
          <Input type="text" placeholder="Verify Your Email" />
          <div className="mt-10">
            <button
              type="submit"
              className="bg-gray-500 text-white w-full p-3 rounded hover:bg-red-400"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
