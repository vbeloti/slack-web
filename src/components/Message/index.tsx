import React from "react";

import "./styles.css";

interface IMessage {
  message?: string;
  timestamp?: string;
  user?: string;
  userImage?: string;
}

const Message = ({ message, timestamp, user, userImage }: IMessage) => {
  return <div className="message"></div>;
};

export default Message;
