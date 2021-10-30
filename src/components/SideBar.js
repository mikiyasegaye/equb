import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Controls from "../components/controls/Controls";

import { mainListItems } from "../components/sidebarItems";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiBackdrop-root": {
      display: "none",
    },
  },
  drawerPaper: {
    flexDirection: "column",
    position: "fixed",
    width: drawerWidth,
    height: "100%",
    backgroundColor: "#445765",
    marginTop: "63px", //TODO: check this out later
  },
  drawerContainer: {
    overflow: "auto",
  },
}));

export default function SideBar() {
  const classes = useStyles();
  const [loggedInUser, setLoggedInUser] = useState();

  useEffect(() => {
    // let decoded = jwt_decode(localStorage.getItem("tokenData"));
    // setLoggedInUser(decoded);
    setLoggedInUser("SYSTEM ADMIN");
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Divider />
        <List>
          <Controls.SideListItem to="" primary={loggedInUser}>
            <ListItemIcon style={{ color: "white" }}>
              <AccountCircleIcon />
            </ListItemIcon>
          </Controls.SideListItem>
        </List>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
      </Drawer>
    </div>
  );
}
