import { FC } from "react";

type btnProps = {
  title: string;
};

const Button: FC<btnProps> = ({ title }) => {
  return (
    <button className="text-white bg-blue-400 m-2 p-2 rounded">{title}</button>
  );
};

export default Button;
