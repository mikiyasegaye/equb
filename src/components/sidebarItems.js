import React from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Controls from "../components/controls/Controls";

export const accountListsItems = (
  <div>
    <Controls.SideListItem to="" primary="Account">
      <ListItemIcon style={{ color: "white" }}>
        <AccountCircleIcon />
      </ListItemIcon>
    </Controls.SideListItem>
  </div>
);

export const mainListItems = (
  <div>
    <Controls.SideListItem to="/dashboard" primary="Dashboard">
      <ListItemIcon style={{ color: "white" }}>
        <DashboardIcon />
      </ListItemIcon>
    </Controls.SideListItem>
  </div>
);
