import React from "react";
import Dropzone from "react-dropzone";
import { Field, reduxForm } from "redux-form";
import injectSheet from "react-jss";
import { compose } from "redux";

const styles = {
  CreateSchoolForm: {
    padding: "20px"
  }
};

const IMAGE_PREVIEW_WIDTH = 200;

const CreateSchoolForm = ({ classes, handleSubmit, handleAddImage, image }) => {
  return (
    <div className={classes.CreateSchoolForm}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name"> College Name </label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="Image"> Image </label>
          <Dropzone onDropAccepted={handleAddImage} />
          <div>
            {image && <img src={image.preview} width={IMAGE_PREVIEW_WIDTH} />}
          </div>
        </div>
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default compose(
  reduxForm({
    form: "createSchool"
  }),
  injectSheet(styles)
)(CreateSchoolForm);
