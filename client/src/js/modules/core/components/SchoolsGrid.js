import React from "react";
import injectSheet from "react-jss";
import SchoolPreview from "./SchoolPreview";
import Grid from "react-css-grid";

const styles = {
  SchoolsGrid: {
    padding: "20px"
  }
};
const SchoolsGrid = ({ classes, schools }) => {
  return (
    <div className={classes.SchoolsGrid}>
      <Grid width={256} align="baseline">
        {schools.map(school => <SchoolPreview key={school.id} {...school} />)}
      </Grid>
    </div>
  );
};

export default injectSheet(styles)(SchoolsGrid);
