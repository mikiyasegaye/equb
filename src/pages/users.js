import React from "react";
import Layout from "../components/Layout";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(4),
    },
  })
);

export default function Users() {
  const classes = useStyles({});
  return (
    <Layout>
      <div className={classes.root}>
        <h1>USERS</h1>
        <br />
        <h2>Users List</h2>
      </div>
    </Layout>
  );
}
