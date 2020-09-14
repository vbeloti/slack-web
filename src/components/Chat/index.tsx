import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import "./styles.css";
import db from "../../config/connectionFirebase";
import Message from "../Message";
import ChatInput from "../ChatInput";

interface IUseParams {
  roomId: string;
}

interface IRoomDetails {
  name: string;
}

interface IRoomMessages {
  message: string;
  user: string;
  userImage: string;
  timestamp: {
    seconds: number;
  };
}

const Chat = () => {
  const { roomId } = useParams<IUseParams>();
  const [roomDetails, setRoomDetails] = useState<IRoomDetails>();
  const [roomMessages, setRoomMessages] = useState<IRoomMessages[]>([]);

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) =>
          setRoomDetails(snapshot.data() as IRoomDetails)
        );
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data() as IRoomMessages))
      );
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <InfoOutlinedIcon /> Detalhes
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userImage }, index) => (
          <Message
            key={index}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>

      <ChatInput channelName={roomDetails?.name} channelId={roomId}  />
    </div>
  );
};

export default Chat;
