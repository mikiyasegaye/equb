import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import MuiListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#23224F",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&$selected:hover": {
      backgroundColor: "#23223D",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&:hover": {
      backgroundColor: "#34335A",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
  },
  selected: {},
})(MuiListItem);

export default function SideListItem(props) {
  const { to, primary, children } = props;
  const location = useLocation();
  return (
    <ListItem
      button
      component={Link}
      to={to}
      selected={to === location.pathname}
    >
      {children}
      <ListItemText primary={primary} style={{ color: "white" }} />
    </ListItem>
  );
}
