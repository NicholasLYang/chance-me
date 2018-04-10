import React from "react";
import Dropzone from "react-dropzone";
import { Field, reduxForm } from "redux-form";

const CreateSchoolForm = ({ handleSubmit, handleAddImage, images }) => {
  console.log(images);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Name"> College Name </label>
      <Field name="name" component="input" type="text" />
      <label htmlFor="Image"> Image </label>
      <div>
        <Dropzone onDropAccepted={handleAddImage} />
        <div>
          {images.map((img, index) => (
            <img height={200} key={index} src={img[0].preview} />
          ))}
        </div>
      </div>
      <button type="submit"> Submit </button>
    </form>
  );
};

export default reduxForm({
  form: "createSchool"
})(CreateSchoolForm);
