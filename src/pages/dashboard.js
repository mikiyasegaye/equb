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

export default function Dashboard() {
  const classes = useStyles({});
  return (
    <Layout>
      <div className={classes.root}>
        <h1>HOME</h1>
        <br />
        <h2>DASHBOARD</h2>
      </div>
    </Layout>
  );
}
