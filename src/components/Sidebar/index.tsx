import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

import "./styles.css";

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
    </div>
  );
};

export default Sidebar;
