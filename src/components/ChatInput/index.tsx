import React from "react";

import "./styles.css";

interface IChatInput {
  channelName: string | undefined;
  channelId: string;
}

const ChatInput = ({ channelName, channelId }: IChatInput) => {
  return <div className="chatInput"></div>;
};

export default ChatInput;
