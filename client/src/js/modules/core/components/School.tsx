import * as React from "react";
import injectSheet from "react-jss";

const styles = {
  School: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  imageContainer: {
    position: "relative",
    width: "1000px",
    height: "500px",
    filter: "grayscale(50%) brightness(50%)",
    backgroundImage: props => `url(${props.image_url})`,
  },
  description: {
    display: "flex",
    position: "absolute",
    top: "20%",
    left: "10%",
    color: "gray",
    justifyContent: "center",
    flexDirection: "column",
    lineHeight: "1.4em",
    fontSize: "1.2em"
  },
  "@media (max-width: 800px)": {
    School: {
      flexDirection: "column"
    },
    description: {
      padding: "8px"
    },
    image: {
      maxWidth: "80%"
    }
  }
};

interface SchoolClasses {
  School: string;
  imageContainer: string;
  description: string;
  image: string;
}
interface SchoolProps {
  classes: SchoolClasses;
  description: string;
  gist: string;
  image_url: string;
  name: string;
}

const School: React.SFC<SchoolProps> = ({
  classes,
  gist,
  description,
  name,
}) => {
  return (
    <div className={classes.School}>
      <h2> {name} </h2>
      <div className={classes.imageContainer} />
      <div className={classes.description}>
        <h3> {gist} </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default injectSheet(styles)(School);
