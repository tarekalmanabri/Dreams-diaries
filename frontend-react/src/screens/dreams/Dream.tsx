import { FC } from "react";

interface dreamProps {
  dream: string;
}

const Dream: FC<dreamProps> = ({ dream }) => {
  return (
    <div className="p-2 my-5 bg-red-400 text-white rounded">
      <div className="space-x-4">
        <i className="cursor-pointer fas fa-edit"></i>
        <i className="cursor-pointer fas fa-trash-alt"></i>
      </div>
      <p className="mt-2">{dream}</p>
    </div>
  );
};

export default Dream;
