import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";

import { accountListsItems, mainListItems } from "../components/sidebarItems";

const drawerWidth = 240;

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
        <List>{accountListsItems}</List>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
      </Drawer>
    </div>
  );
}
