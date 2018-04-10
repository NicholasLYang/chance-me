import React from "react";
import { Field, reduxForm } from "redux-form";
import injectSheet from "react-jss";
import { compose } from "redux";

const styles = {
  SchoolNameForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};

const SchoolNameForm = ({ classes, handleSubmit, isCurrentPage }) => {
  return (
      <form onSubmit={handleSubmit}>
        <div className={classes.SchoolNameForm}>
          <label htmlFor="Name"> College Name </label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          { isCurrentPage && <button type="submit"> Next</button> }
        </div>
      </form>
  );
};

export default compose(
  reduxForm({
    form: "createSchool",
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true
  }),
  injectSheet(styles)
)(SchoolNameForm);
