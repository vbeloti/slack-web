import { Button } from "@material-ui/core";
import firebase from "firebase";
import React, { MouseEvent, useState } from "react";
import db from "../../config/connectionFirebase";
import { useStateValue } from "../../context/StateProvider";

import "./styles.css";

interface IChatInput {
  channelName: string | undefined;
  channelId: string;
}

const ChatInput = ({ channelName, channelId }: IChatInput) => {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const handleSendMessage = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Mensagem #${channelName}`}
          type="text"
        />
        <Button type="submit" onClick={handleSendMessage}>
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
