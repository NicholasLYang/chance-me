import React from "react";
import injectSheet from "react-jss";
import { Link } from 'react-router-dom'

const styles = {
  Header: {
    fontFamily: "Fira Sans, Helvetica, sans-serif",
    fontSize: "2em"
  }
}

const Header = ({ classes }) => {
  return (
    <div className={classes.Header}>
      <Link to="/"> <h1> School Seeker </h1> </Link>
      <Link to="/schools/new"> Add Your School </Link>
    </div>
  )
}

export default injectSheet(styles)(Header);