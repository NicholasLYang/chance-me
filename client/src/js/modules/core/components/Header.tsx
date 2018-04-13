import React from "react";
import injectSheet from "react-jss";
import { Link } from 'react-router-dom'

const styles = {
  Header: {
    fontFamily: "Fira Sans, Helvetica, sans-serif",
    fontSize: "2em"
  }
}

interface HeaderClasses { Header: string }
interface HeaderProps { classes: HeaderClasses }

const Header: React.SFC<HeaderProps> = ({ classes }) => {
  return (
    <div className={classes.Header}>
      <Link to="/"> <h1> ChanceMe </h1> </Link>
      <Link to="/schools/new"> Add Your School </Link>
    </div>
  )
};

export default injectSheet(styles)(Header);