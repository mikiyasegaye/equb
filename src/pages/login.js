import * as React from "react";
import { version } from "../../package.json";
import Avatar from "@material-ui/core/Avatar";
import FormControl from "@material-ui/core/FormControl";
import { Alert } from "@mui/material";
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
    marginTop: theme.spacing(20),
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
    marginTop: theme.spacing(),
  },
  footer: {
    position: "fixed",
    width: "100%",
    bottom: 0,
    right: 0,
    padding: 25,
    textAlign: "right",
  },
  dividerTop: {
    background: "#23224F",
    height: 5,
  },
  dividerBottom: {
    background: "#23224F",
    height: 10,
  },
}));

const Login = (props) => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Paper elevation={10} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div>
          {/* {loginData.errorMsg ? (
            <Alert severity="error">{loginData.errorMsg}</Alert>
          ) : null} */}
        </div>
        <form className={classes.form}>
          <FormControl margin="normal" fullWidth>
            <Controls.Input label="username" name="Username" autoFocus />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Controls.Input label="Password" name="Password" type="password" />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <Controls.Button
              variant="contained"
              color="primary"
              size="large"
              text="SIGN IN"
              type="submit"
            />
          </FormControl>
        </form>
        <div className={classes.footer}>
          <Divider className={classes.dividerTop} />
          <Typography variant="h4">Equb App</Typography>
          <Typography variant="h6">Version: {version}, 2021</Typography>
          <Divider className={classes.dividerBottom} />
        </div>
      </Paper>
    </main>
  );
};

export default Login;
