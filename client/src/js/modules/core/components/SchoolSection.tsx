import * as React from "react";
import injectSheet from "react-jss";
import Review from "./Review";
import { invertColor } from "../../utils"

const styles = {
  SchoolSection: {
    margin: "30px",
    borderRadius: "10px",
    paddingBottom: "30px",
    boxShadow: "4px 4px 13px -2px rgba(0,0,0,0.75)"
  },
  topic: {
    backgroundColor: props => props.section.topic.color,
    borderRadius: "10px 10px 0 0",
    fontSize: "1.2em",
    padding: "5px",
    color: props => invertColor(props.section.topic.color, true),
  },
  reviews: {
    padding: "30px",
    display: "flex",
    flexDirection: "row",
  }
};

const SchoolSection = ({ classes, section }) => {
  const topicName = section.topic.name;
  return (
    <div className={classes.SchoolSection}>
      <div className={classes.topic}> {topicName} </div>
      <div className={classes.reviews}>
        {section.reviews.map(({ id, content }) => (
          <Review key={id} content={content} />
        ))}
      </div>
    </div>
  );
};

export default injectSheet(styles)(SchoolSection);
