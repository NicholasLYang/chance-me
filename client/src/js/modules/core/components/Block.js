import React from "react";
import injectSheet from "react-jss";
import { template, Transition, animated } from "react-spring";

const styles = {
  Block: {
    margin: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2em",
    width: "300px",
    height: "300px",
    backgroundColor: "coral",
    borderRadius: "10px"
  }
};

const Block = ({ classes, children }) => {
  return (
    <Transition native from={{ x: -50 }} enter={{ x: 0 }}>
      {({ x }) => (
        <animated.div
          style={{ transform: template`translate3d(${x}vw, 0, 0)` }}
        >
          <div className={classes.Block}>{children}</div>
        </animated.div>
      )}
    </Transition>
  );
};

export default injectSheet(styles)(Block);
