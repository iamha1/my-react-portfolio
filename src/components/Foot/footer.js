import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  links: {
    color: "white",
    textDecoration: "grey",
  },

  appBar: {
    top: "auto",
    bottom: 0,
    position: "static",
  },
  tool: {
    justifyContent: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar color="primary" className={classes.appBar}>
        <Toolbar className={classes.tool}>
          <Typography>
            Copyright 2020 {" "}
            <a
              className={classes.links}
              href="https://material-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              This page was created with Material-UI
            </a>{" "}
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}