import * as React from "react";
import injectSheet from "react-jss";

const styles = {
  School: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  imageContainer: {
    flexGrow: "2",
    padding: "5%",
    display: "flex",
    flexDirection: "column"
  },
  description: {
    maxWidth: "500px",
    lineHeight: "1.4em",
    fontSize: "1.2em"
  }
};

interface SchoolClasses {
  School: string;
  imageContainer: string;
  description: string;
}
interface SchoolProps {
  classes: SchoolClasses;
  description: string;
  topic_sentence: string;
  medium_image_url: string;
  name: string;
}

const School: React.SFC<SchoolProps> = ({
  classes,
  topic_sentence,
  description,
  name,
  medium_image_url
}) => {
  return (
    <div className={classes.School}>
      <div className={classes.imageContainer}>
        <h2> {name} </h2>
        <img src={medium_image_url} />
      </div>
      <div className={classes.description}>
        <h3> {topic_sentence} </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default injectSheet(styles)(School);
