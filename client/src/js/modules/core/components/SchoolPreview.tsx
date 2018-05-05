import * as React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom"

const styles = {
  SchoolPreview: {
    color: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    paddingBottom: "40px",
    paddingTop: "20px",
    "&:hover": {
      backgroundColor: "#e4e4e4"
    }
  },
  image: {
    maxWidth: "80%",
  }
};

interface SchoolPreviewClasses {
  SchoolPreview: string;
  image: string;
}
interface SchoolPreviewProps {
  classes: SchoolPreviewClasses;
  name: string;
  slug: string;
  medium_image_url: string;
}

const SchoolPreview: React.SFC<SchoolPreviewProps> = ({
  classes,
  name,
  slug,
  medium_image_url
}) => {
  return (
    <Link to={`/schools/${slug}`}>
    <div className={classes.SchoolPreview}>
      <h2> {name} </h2>
      <img className={classes.image} src={medium_image_url} />
    </div>
    </Link>
  );
};

export default injectSheet(styles)(SchoolPreview);
