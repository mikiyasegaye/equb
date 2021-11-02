import React, { useState } from "react";
import Layout from "../components/Layout";
import { useForm } from "../components/useForm";
import Controls from "../components/controls/Controls";
import Modal from "../components/Modal";
import Notification from "../components/Notification";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import UsersList from "../components/tables/UsersList";
import CreateUser from "../components/forms/CreateUser";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(4),
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(3),
      border: "#EEEEEE 1px solid",
    },
    formControl: {
      float: "right",
    },
  })
);

export default function Users() {
  const { idValue, setIdValue } = useForm();
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    title: "",
    message: "",
    type: "",
  });
  return (
    <Layout>
      <div className={classes.root}>
        <h1>USERS</h1>
        <Paper className={classes.paper} elevation={0}>
          <div className={classes.formControl}>
            <Controls.FloatingActionButton
              text="CREATE USER"
              variant="contained"
              onClick={() => setOpenModal(true)}
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <UsersList
            notify={notify}
            setNotify={setNotify}
            openModal={openModal}
            setOpenModal={setOpenModal}
            idValue={idValue}
            setIdValue={setIdValue}
          />
        </Paper>
      </div>
      <Modal
        title="CREATE USER"
        openModal={openModal}
        setOpenModal={setOpenModal}
        notify={notify}
        setNotify={setNotify}
        idValue={idValue}
      >
        <CreateUser
          setOpenModal={setOpenModal}
          notify={notify}
          setNotify={setNotify}
          idValue={idValue}
        />
      </Modal>
      <Notification notify={notify} setNotify={setNotify} />
    </Layout>
  );
}
