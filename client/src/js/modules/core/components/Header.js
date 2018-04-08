import React from "react";
import injectSheet from "react-jss";

const styles = {
  Header: {
    fontFamily: "Fira Sans, Helvetica, sans-serif",
    fontSize: "2em"
  }
}

const Header = ({ classes }) => {
  return (
    <div className={classes.Header}>
      <h1> School Seeker </h1>
    </div>
  )
}

export default injectSheet(styles)(Header);