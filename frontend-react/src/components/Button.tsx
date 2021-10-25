import { FC, MouseEventHandler } from "react";

interface btnProps {
  title?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: MouseEventHandler;
}

const Button: FC<btnProps> = ({ onClick, title, type }) => {
  return (
    <button
      className="text-sm text-gray-700 m-2 p-2 rounded hover:bg-red-400 hover:text-white"
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
