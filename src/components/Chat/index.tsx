import React from 'react';
import { useParams } from 'react-router-dom';

import './styles.css';

interface IUseParams {
    roomId: string;
}

const Chat = () => {
    const { roomId } = useParams<IUseParams>();

  return (
      <div className="chat">
          {roomId}
      </div>
  );
}

export default Chat;