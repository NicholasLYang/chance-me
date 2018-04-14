import * as React from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";

const TEXT_GRAY = "#ebebeb";

const styles = {
  Header: {
    margin: "0",
    backgroundColor: "maroon",
    width: "100%",
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Fira Sans, Helvetica, sans-serif",
    fontSize: "1.5em"
  },
  links: {
    height: "100%",
    paddingRight: "30px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexGrow: "2",
  },
  button: {
    border: "solid 2px",
    borderColor: "white",
    padding: "8px",
    borderRadius: "8px",
    color: "white",
    '&:hover': {
      backgroundColor: "white",
      borderColor: "white",
      color: "maroon"
    }
  },
  masthead: {
    color: TEXT_GRAY,
  }
};

interface HeaderClasses {
  Header: string;
  links: string;
  masthead: string;
  button: string;
}
interface HeaderProps {
  classes: HeaderClasses;
}

const Header: React.SFC<HeaderProps> = ({ classes }) => {
  return (
    <div className={classes.Header}>
      <Link to="/" className={classes.masthead}>
          <h1> Chance Me </h1>
      </Link>
      <div className={classes.links}>
        <Link className={classes.button} to="/schools/new">
          Add Your School
        </Link>
      </div>
    </div>
  );
};

export default injectSheet(styles)(Header);
