import React from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import Controls from "../components/controls/Controls";

export const mainListItems = (
  <div>
    <Controls.SideListItem to="/dashboard" primary="Dashboard">
      <ListItemIcon style={{ color: "white" }}>
        <DashboardIcon />
      </ListItemIcon>
    </Controls.SideListItem>
    <Controls.SideListItem to="/users" primary="Users">
      <ListItemIcon style={{ color: "white" }}>
        <PeopleIcon />
      </ListItemIcon>
    </Controls.SideListItem>
  </div>
);
