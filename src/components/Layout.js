import React from "react";
import { version } from "../../package.json";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import SideBar from "./SideBar";

const drawerWidth = 250;

const useStyles = makeStyles({
  page: {
    float: "right",
    width: `calc(100% - ${drawerWidth}px)`,
    height: "100%",
    marginTop: "63px", //TODO: check this out later
  },
  footer: {
    position: "fixed",
    width: "100%",
    bottom: 0,
    right: 0,
    padding: 10,
    textAlign: "right",
  },
});

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <>
      <Header />
      <SideBar />
      <div className={classes.page}>{children}</div>
      <CssBaseline />
      <div className={classes.footer}>
        <Divider />
        <Typography>Version: {version}, 2021</Typography>
        <Divider />
      </div>
    </>
  );
}
