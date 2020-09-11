import React from "react";
import { useParams } from "react-router-dom";

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import "./styles.css";

interface IUseParams {
  roomId: string;
}

const Chat = () => {
  const { roomId } = useParams<IUseParams>();

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># Geral</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Detalhes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
