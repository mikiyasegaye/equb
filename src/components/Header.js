import React from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutUser } from "../api";

const style = {
  appbar: {
    paddingLeft: "0px",
    width: "100%",
    background: "primary",
  },
  title: {
    flexGrow: 1,
    padding: "6px",
  },
};

const Header = ({ classes }) => {
  const history = useHistory();
  const handleLogoutClick = () => {
    logoutUser();
    history.push("/login");
  };
  return (
    <AppBar className={classes.appbar} position="fixed">
      <Toolbar>
        <Grid container>
          <Grid item>
            <Typography variant="h6" className={classes.title}>
              EQUB APP
            </Typography>
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton color="inherit">
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={handleLogoutClick}>
              <LogoutIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(style)(Header);
