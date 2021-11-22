import { FC } from "react";
import { DreamData } from "../../services/api/dreamApi";

const Dream: FC<DreamData> = ({ content }) => {
  return (
    <div className="p-2 my-5 bg-red-400 text-white rounded">
      <div className="space-x-4">
        <i className="cursor-pointer fas fa-edit"></i>
        <i className="cursor-pointer fas fa-trash-alt"></i>
      </div>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default Dream;
