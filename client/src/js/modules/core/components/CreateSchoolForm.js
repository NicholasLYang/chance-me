import React from "react";
import { Field, reduxForm } from "redux-form";

const CreateSchoolForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Name"> College Name </label>
      <Field name="name" component="input" type="text"/>
      <button type="submit"> Submit </button>
    </form>
  );
};

export default reduxForm({
  form: "createSchool"
})(CreateSchoolForm);
