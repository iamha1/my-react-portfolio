import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    background: "white",
    borderRadius: "0",
    border: "none",
    marginTop: "10%",
    marginBottom: "13%",
    height: 508,
  },
}));

export default function Mefile() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" color="black">
       <h3>My name is Ha Nguyen. I come from Hanoi, Vietnam.</h3> 
       <h3> During my 8 years as an expat in the US, I started as a student then moved on to work in higher education.</h3> 
       <h3> I am a highly driven individual with strong work ethics wanting to create clean, practical and intuitive
        applications. </h3>
        <h3> I am an excellent team player bolstered by my great interpersonal skills and my ability to adapt and solve problems.</h3>
        <h2>Thank you for visiting my humble nest!</h2>
        </Typography>
      </CardContent>
    </Card>
  );
}
