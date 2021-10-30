import { makeStyles, Typography } from "@material-ui/core";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import Controls from "./controls/Controls";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
    width: "100%",
    borderRadius: "25px",
  },
}));

export default function Modal(props) {
  const classes = useStyles();
  const { title, children, openModal, setOpenModal } = props;

  return (
    <Dialog
      open={openModal}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Controls.ActionButton
            color="primary"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <CloseIcon />
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
