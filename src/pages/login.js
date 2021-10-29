import * as React from "react";
import { version } from "../../package.json";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/styles";
import Controls from "../components/controls/Controls";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    width: "30%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  paper: {
    marginTop: theme.spacing.unit * 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "25px",
  },
  avatar: {
    margin: "10px",
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: "15px",
  },
  footer: {
    position: "fixed",
    bottom: 0,
    padding: 10,
    textAlign: "center",
  },
}));

const Login = (props) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" fullWidth>
            <Controls.Input label="username" name="Username" autoFocus />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Controls.Input label="Password" name="Password" type="password" />
          </FormControl>
          <Controls.Button
            variant="contained"
            color="primary"
            size="large"
            text="SIGN IN"
            type="submit"
            className={classes.submit}
            fullWidth
          />
        </form>
        <div className={classes.footer}>
          <Divider />
          <Typography>
            Powered By: Mikiyas T. (mikiyasegaye@gmail.com)
          </Typography>
          <Typography>Version: {version}</Typography>
          <Divider />
        </div>
      </Paper>
    </main>
  );
};

export default Login;
