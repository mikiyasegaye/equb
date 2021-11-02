import React from "react";
import Layout from "../components/Layout";
import { useForm } from "../components/useForm";
import Controls from "../components/controls/Controls";
import Modal from "../components/Modal";
import Notification from "../components/Notification";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import EqubsList from "../components/tables/EqubsList";
import CreateEqub from "../components/forms/CreateEqub";

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

export default function Equbs() {
  const { idValue, setIdValue, notify, setNotify, openModal, setOpenModal } =
    useForm();
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <h1>EQUBS</h1>
        <Paper className={classes.paper} elevation={0}>
          <div className={classes.formControl}>
            <Controls.FloatingActionButton
              text="CREATE USER"
              variant="outline"
              onClick={() => setOpenModal(true)}
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <EqubsList
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
        <CreateEqub
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
