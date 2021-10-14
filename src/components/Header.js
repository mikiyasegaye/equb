import React from "react";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";

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

const Header = ({classes}) => {
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
            <IconButton color="inherit">
              <AccountCircleIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(style)(Header);
