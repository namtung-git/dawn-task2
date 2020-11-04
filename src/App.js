import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";

import slides from "./assets/images/presentation.png";

const useStyles = makeStyles( (theme) => ({
  root: {
    flexGrow: 1,
  },
  slides: {
    padding: theme.spacing(2),
    width: '750px',
    height: '450px'
  },
  questionCard: {
    paddingRight: theme.spacing(2)
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className="title">
        <h1>Workshop: How To Manage School and Work</h1>
        <h5>Host: __________</h5>
      </div>

      <Grid container>
        <Grid item xs={8}>
          <img src={slides} alt="Slides" className={classes.slides}/>
        </Grid>
        <Grid item xs={4} className={classes.questionCard}>
          <QuestionCard />
        </Grid>
      </Grid>
    </div>
  );
}
