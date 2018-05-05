import React from "react";
import injectSheet from "react-jss";
import SchoolPreview from "./SchoolPreview";
import Grid from "react-css-grid";
import { connect } from "react-redux";
import { compose } from "redux";

const styles = {
  SchoolsGrid: {
    padding: "5%",
    maxWidth: "100%"
  }
};

const GRID_PADDING = 40;
const DEFAULT_GRID_WITH = 400;

const SchoolsGrid = ({ classes, schools, viewportWidth }) => {
  const gridWidth =
    viewportWidth < DEFAULT_GRID_WITH
      ? viewportWidth - GRID_PADDING
      : DEFAULT_GRID_WITH;
  return (
    <div className={classes.SchoolsGrid}>
      <Grid width={gridWidth} gap={10}>
        {schools.map(school => <SchoolPreview key={school.id} {...school} />)}
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  viewportWidth: state.core.viewportWidth
});

export default compose(injectSheet(styles), connect(mapStateToProps))(
  SchoolsGrid
);
