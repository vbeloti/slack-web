import { SvgIconProps } from "@material-ui/core";
import React, { ComponentType } from "react";
import { useHistory } from "react-router-dom";
import db from "../../config/connectionFirebase";

import "./styles.css";

interface ISidebarOption {
  Icon?: ComponentType<SvgIconProps>;
  title: string;
  id?: string;
  addChannelOption?: boolean;
}

const SidebarOption = ({
  Icon,
  title,
  id,
  addChannelOption,
}: ISidebarOption) => {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Por favor, insira um nome de canal");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
