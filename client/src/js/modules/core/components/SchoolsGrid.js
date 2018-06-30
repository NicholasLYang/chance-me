import React from "react";
import injectSheet from "react-jss";
import SchoolPreview from "./SchoolPreview";

const styles = {
  SchoolsGrid: {
    display: "grid",
    width: "90%",
    alignItems: "center",
    justifyItems: "center",
    gridGap: "30px",
    gridTemplateColumns: "repeat(auto-fill, 400px)",
    maxWidth: "100%"
  }
};

const SchoolsGrid = ({ classes, schools }) => {
  return (
    <div className={classes.SchoolsGrid}>
      {schools.map(school => <SchoolPreview key={school.id} {...school} />)}
    </div>
  );
};

export default injectSheet(styles)(SchoolsGrid);
