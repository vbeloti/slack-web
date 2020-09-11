import React from "react";
import Avatar from "@material-ui/core/Avatar/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" src="Avatar" />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Buscar..." type="text"/>
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
