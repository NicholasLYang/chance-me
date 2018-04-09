import React from "react";

const SchoolPreview = ({ name, medium_image_url }) => {
  return(
    <div>
      <h2> {name} </h2>
      <img src={medium_image_url} />
    </div>
  )
}

export default SchoolPreview;