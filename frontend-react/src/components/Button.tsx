import { FC, MouseEventHandler } from "react";

interface btnProps {
  title: string;
  onClick?: MouseEventHandler;
}

const Button: FC<btnProps> = ({ onClick, title }) => {
  return (
    <button
      className="text-gray-700 m-2 p-2 rounded hover:bg-red-400 hover:text-white"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
