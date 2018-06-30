import * as React from "react"
import injectSheet from "react-jss"

const styles = {
  Review: {
    padding: "5px",
    margin: "5px",
    backgroundColor: "#dddddd",
    fontSize: "1.2em"
  }
};
const Review = ({ classes, content }) => {
  return (
    <div className={classes.Review}>
      <div>
        { content }
      </div>
    </div>
  )
};

export default injectSheet(styles)(Review);