import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { CREATE_SCHOOL } from "../../core/mutations";
import { push } from "react-router-redux";
import { bindActionCreators, compose } from "redux";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import SchoolNameForm from "./SchoolNameForm";
import AddImageForm from "./AddImageForm";
import Block from "../../core/components/Block";

const styles = {
  CreateSchoolPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
};

class CreateSchoolPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: undefined,
      currentPage: 1
    };
  }

  nextPage = () => {
    console.log(this.state.currentPage);
    this.setState({ currentPage: this.state.currentPage + 1 });
    console.log(this.state.currentPage);
  };

  previousPage = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  handleAddImage = acceptedFiles => {
    this.setState({ image: acceptedFiles[0] });
  };

  handleCompletion = () => {
    push("/");
  };

  render() {
    const { classes } = this.props;
    const { currentPage, image } = this.state;
    return (
      <Mutation mutation={CREATE_SCHOOL} onCompleted={this.handleCompletion}>
        {createSchool => (
          <div className={classes.CreateSchoolPage}>
            {currentPage > 0 && (
              <Block>
                <SchoolNameForm onSubmit={this.nextPage} />
              </Block>
            )}
            {currentPage > 1 && (
              <Block>
                <AddImageForm
                  handleAddImage={this.handleAddImage}
                  onSubmit={values => {
                    createSchool({ variables: { name: values.name } });
                  }}
                  previousPage={this.previousPage}
                  image={image}
                />
              </Block>
            )}
          </div>
        )}
      </Mutation>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default compose(connect(null, mapDispatchToProps), injectSheet(styles))(
  CreateSchoolPage
);
