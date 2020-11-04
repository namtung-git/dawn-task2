import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, Box, Card } from "@material-ui/core";

import DisplayPanel from "./DisplayPanel";
import SubmitPanel from "./SubmitPanel";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  tab: {
    fontSize: '14px',
    textTransform: 'capitalize',
    minWidth: '120px',
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}

export default function QuestionCard() {
  const [value, setValue] = React.useState(0);
  const [questionList, setList] = React.useState([]);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (newQuestions) => {
    setList(questionList.concat(newQuestions));
  };

  return (
    <Card className={classes.root}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Group Questions" className={classes.tab}/>
        <Tab label="Submit a Question" className={classes.tab}/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <DisplayPanel questions={questionList} onChange={handleChange}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SubmitPanel onPanelSubmit={handleSubmit}/>
      </TabPanel>
    </Card>
  );
}
