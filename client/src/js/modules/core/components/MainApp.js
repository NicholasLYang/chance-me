import React, { PureComponent } from "react";
import injectSheet from "react-jss";
import connect from "react-redux/lib/connect/connect";

import { refreshWindowDimensions } from "./../actions";
import Header from './Header'
import SchoolsGrid from './SchoolsGrid'

const styles = {
  MainApp: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
};

class MainApp extends PureComponent {

  onResizeWindow = () => {
    this.props.onResizeWindow();
  };
  componentDidMount() {
    window.addEventListener("resize", this.onResizeWindow);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.onResizeWindow);
  }
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.MainApp}>
        <Header />
        <SchoolsGrid/>
      </div>
    );
  }
}

const VisibleMainApp = connect(
  (state) => ({
    viewportWidth: state.core.viewportWidth,
    viewportHeight: state.core.viewportHeight
  }),
  dispatch => ({
    onResizeWindow: () => {
      dispatch(refreshWindowDimensions());
    }
  })
)(injectSheet(styles)(MainApp));

export default VisibleMainApp;
