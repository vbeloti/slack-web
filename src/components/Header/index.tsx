import React from "react";
import Avatar from "@material-ui/core/Avatar/Avatar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import "./styles.css";
import { useStateValue } from "../../context/StateProvider";

const Header = () => {
  const [{ user }] = useStateValue();

  console.log(user);

  return (
    <div className="header">
      <div className="header__left">
        <Avatar src={user?.photoURL} alt={user?.displayName} className="header__avatar" />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Buscar..." type="text" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
