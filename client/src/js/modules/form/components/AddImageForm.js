import React from "react";
import { reduxForm } from "redux-form";
import Dropzone from "react-dropzone";

const IMAGE_PREVIEW_WIDTH = 200;

const AddImageForm = ({ handleAddImage, image, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Image"> Image </label>
      <Dropzone onDropAccepted={handleAddImage} />
      <div>
        {image && <img src={image.preview} width={IMAGE_PREVIEW_WIDTH} />}
      </div>
    </form>
  );
};

export default reduxForm({
  form: "createSchool",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(AddImageForm);
