import React from "react";
import Avatar from "@material-ui/core/Avatar/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import "./styles.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" src="Avatar" />
        <AccessTimeIcon />
      </div>
      <div className="header__search"></div>
      <div className="header__right"></div>
    </div>
  );
};

export default Header;
