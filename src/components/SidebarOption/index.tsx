import { SvgIconProps } from "@material-ui/core";
import React, { ComponentType } from "react";

import "./styles.css";

interface ISidebarOption {
  Icon?: ComponentType<SvgIconProps>;
  title: string;
}

const SidebarOption = ({ Icon, title }: ISidebarOption) => {
  return (
    <div className="sidebarOption">
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
