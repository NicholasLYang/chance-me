import React from "react";
import { reduxForm } from "redux-form";

const SubmitSchoolForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button type="submit"> Submit! </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "createSchool",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(SubmitSchoolForm);
