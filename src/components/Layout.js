import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import SideBar from "./SideBar";

const drawerWidth = 230;

const useStyles = makeStyles({
  page: {
    float: "right",
    width: `calc(100% - ${drawerWidth}px)`,
    height: "100%",
    marginTop: "63px", //TODO: check this out later
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
    </>
  );
}
