import * as React from "react";
import injectSheet from "react-jss";
import Logo from "../../icons/components/Logo";
import Library from "../../icons/components/Library";

const styles = {
  AboutPage: {
    color: "#2b2d42",
    fontSize: "1.4em",
    lineHeight: "1.5em",
    maxWidth: "600px"
  },
  block: {
    paddingTop: "20px",
    paddingBottom: "20px"
  },
  logo: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#00cfc1"
  }
};

const AboutPage = ({ classes }) => {
  return (
    <div className={classes.AboutPage}>
      <div className={classes.block}>
        <Logo className={classes.logo} />
        <h2> What is ChanceMe? </h2>
        <p>
          ChanceMe is a site dedicated to finding the best possible colleges for
          students. Our goal is to help make the college application process
          easier and less intimidating by helping you find the best possible
          schools for your needs.
        </p>
      </div>
      <div className={classes.block}>
        <Library />
        <h2> Why?</h2>
        <p>
          Every high schooler has the same experience of being cornered by
          family, friends, even strangers and being asked where they're
          applying. We certainly do. But how do they know where to apply? Sure,
          some schools like Ivy Leagues, MIT, Stanford, etc. are famous. But
          what about schools for the rest of us? At ChanceMe, we're helping
          students find the right school for them using first hand experiences
          from real students. No admissions brochures. No outdated college
          books. No *shudder* College Confidential.
        </p>
      </div>
    </div>
  );
};

export default injectSheet(styles)(AboutPage);
