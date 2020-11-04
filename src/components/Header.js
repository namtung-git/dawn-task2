import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";
import { ReactComponent as ReactLogo } from "../assets/images/dawn-logo.svg";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: "white",
    color: "white",
    boxShadow: "0 2px 0px grey",
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    paddingLeft: "50px",
    justifyContent: "left",
  },
  button: {
    padding: "0 20px",
    color: "grey",
    letterSpacing: '2px'
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Grid item sm={12} xs={12}>
          <Toolbar>
            <Grid className={classes.grow}>
              <ReactLogo className={classes.logo} />
            </Grid>
            <Button color="inherit" className={classes.button}>
              PROFILE
            </Button>
            <Button color="inherit" className={classes.button}>
              EVENT
            </Button>
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  );
}
