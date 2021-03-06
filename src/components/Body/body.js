import React from "react";
import { Grid } from "@material-ui/core";
import Main from "./main";

const Body = () => {
  return (
    <Grid item container>
      <Grid item xs={false} sm={2} />
      <Grid item xs={12} sm={8}>
        <Main />
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
  );
};

export default Body;
