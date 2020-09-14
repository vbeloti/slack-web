import React from "react";

import "./styles.css";

interface IMessage {
  message: string;
  timestamp: {
    seconds: number;
  };
  user: string;
  userImage: string;
}

const Message = ({ message, timestamp, user, userImage }: IMessage) => {
  return (
    <div className="message">
      <img src={userImage} alt={`Foto ${user}`} />
      <div className="message__info">
        <h4>
          {user}{" "}
          <span className="message__timestamp">
            {new Date(timestamp?.seconds * 1000).toLocaleDateString('pt-br')}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
