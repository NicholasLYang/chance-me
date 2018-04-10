import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { CREATE_SCHOOL } from "../mutations";
import CreateSchoolForm from "./CreateSchoolForm";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class CreateSchoolPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  handleAddImage = acceptedFiles => {
    const { images } = this.state;
    this.setState({ images: [...images, acceptedFiles] });
  };

  handleCompletion = () => {
    push("/");
  };

  render() {
    const { images } = this.state;
    return (
      <Mutation mutation={CREATE_SCHOOL} onCompleted={this.handleCompletion}>
        {createSchool => (
          <div>
            <CreateSchoolForm
              handleAddImage={this.handleAddImage}
              images={images}
              onSubmit={values => {
                createSchool({ variables: { name: values.name } });
              }}
            />
          </div>
        )}
      </Mutation>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default connect(null, mapDispatchToProps)(CreateSchoolPage);
