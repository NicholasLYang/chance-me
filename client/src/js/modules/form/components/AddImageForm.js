import React from "react";
import { reduxForm } from "redux-form";
import Dropzone from "react-dropzone";

const IMAGE_PREVIEW_WIDTH = 200;

const AddImageForm = ({
  handleAddImage,
  handleSubmit,
  image,
  getPreviousPage,
  isCurrentPage
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Image"> Image </label>
      <Dropzone onDropAccepted={handleAddImage} />
      <div>
        {image && <img src={image.preview} width={IMAGE_PREVIEW_WIDTH} />}
      </div>
      {isCurrentPage && (
        <span>
          <button onClick={getPreviousPage}> Previous </button>
          <button type="submit"> Next </button>
        </span>
      )}
    </form>
  );
};

export default reduxForm({
  form: "createSchool",
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(AddImageForm);
