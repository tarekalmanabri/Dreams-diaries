import { FC } from "react";

interface btnProps {
  title: string;
}

const Button: FC<btnProps> = ({ title }) => {
  return (
    <button className="text-gray-700 m-2 p-2 rounded hover:bg-red-400 hover:text-white">
      {title}
    </button>
  );
};

export default Button;
