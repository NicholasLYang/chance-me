import * as React from "react";
import injectSheet from "react-jss";

const styles = {
  SchoolPreview: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    "&:hover": {
      backgroundColor: "#e4e4e4"
    }
  }
};

interface SchoolPreviewClasses {
  SchoolPreview: string;
}
interface SchoolPreviewProps {
  classes: SchoolPreviewClasses;
  name: string;
  medium_image_url: string;
}

const SchoolPreview: React.SFC<SchoolPreviewProps> = ({
  classes,
  name,
  medium_image_url
}) => {
  return (
    <div className={classes.SchoolPreview}>
      <h2> {name} </h2>
      <img src={medium_image_url} />
    </div>
  );
};

export default injectSheet(styles)(SchoolPreview);
