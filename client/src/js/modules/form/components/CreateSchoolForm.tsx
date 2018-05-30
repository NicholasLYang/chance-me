import * as React from "react";
import * as Dropzone from "react-dropzone";
import { reduxForm, Field } from "redux-form";
import injectSheet from "react-jss";

const styles = {
  CreateSchoolForm: {
    fontSize: "1.2em"
  },
  schoolName: {
    padding: "10px"
  },
  schoolImage: {
    padding: "10px"
  }
};

const IMAGE_PREVIEW_WIDTH = 200;

const CreateSchoolForm = ({ classes, image, handleAddImage, handleSubmit }) => {
  return (
    <div className={classes.CreateSchoolForm}>
    <form onSubmit={handleSubmit}>
      <div className={classes.schoolName}>
        <label htmlFor="Name"> College Name </label>
        <Field name="name" component="input" type="text" />
      </div>
      <div className={classes.schoolImage}>
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

export default reduxForm({ form: "createSchool" })(
  injectSheet(styles)(CreateSchoolForm)
);
