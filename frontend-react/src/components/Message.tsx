import { FC } from "react";

interface MessageProps {
  msg: string;
  type: "danger" | "success";
}

const Message: FC<MessageProps> = ({ msg, type }) => {
  let typeClass = "";

  if (type === "danger") {
    typeClass = "bg-red-200";
  }
  if (type === "success") {
    typeClass = "bg-green-300";
  }

  return (
    <div className={typeClass}>
      <p>{msg}</p>
    </div>
  );
};

export default Message;
