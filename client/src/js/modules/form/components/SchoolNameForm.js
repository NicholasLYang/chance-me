import React from "react";
import { Field, reduxForm } from "redux-form";
import injectSheet from "react-jss";
import { compose } from "redux";
import { template, Transition, animated } from "react-spring";

const styles = {
  SchoolNameForm: {
    padding: "20px"
  }
};

const SchoolNameForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="Name"> College Name </label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <button type="submit"> Next</button>
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
