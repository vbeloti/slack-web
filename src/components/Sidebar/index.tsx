import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import DraftsIcon from "@material-ui/icons/Drafts";

import "./styles.css";
import SidebarOption from "../SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Vinicius Beloti</h2>
          <h3>
            <FiberManualRecordIcon />
            VBeloti
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Tópicos" />
      <SidebarOption Icon={InboxIcon} title="Menções & reações" />
      <SidebarOption Icon={DraftsIcon} title="items salvos" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Procurar canal" />
      <SidebarOption Icon={PeopleAltIcon} title="Pessoas & usuários" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="Procurar arquivo" />
      <SidebarOption Icon={ExpandLessIcon} title="Mostrar menos" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Canais" />
      <hr />
      <SidebarOption Icon={AddIcon} title="Add Canal" />
    </div>
  );
};

export default Sidebar;
