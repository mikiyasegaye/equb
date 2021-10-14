import { Snackbar, makeStyles } from "@material-ui/core";
import { Alert, AlertTitle } from "@mui/lab";

// import AlertTitle from '@mui/material/AlertTitle';
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(10),
  },
}));

export default function Notification(props) {
  const classes = useStyles();
  const { notify, setNotify } = props;

  const handleClose = (event, reason) => {
    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      className={classes.root}
      open={notify.isOpen}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert variant="outlined" onClose={handleClose} severity={notify.type}>
        <AlertTitle>{notify.title}</AlertTitle>
        {notify.message}
      </Alert>
    </Snackbar>
  );
}
