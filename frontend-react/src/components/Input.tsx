import { ChangeEventHandler, FC } from "react";

interface inputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: ChangeEventHandler;
}

const Button: FC<inputProps> = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      type={type}
      className="mt-5 w-full p-2 border rounded border-gray-300 focus:ring-1"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Button;
