import * as React from "react";
import axios from "axios";
import { Mutation } from "react-apollo";
import { CREATE_SCHOOL } from "../../core/mutations";
import { ALL_SCHOOLS } from "../../core/queries";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { API_URL } from "../../constants";
import { objectToFormData } from "../../utils";
import injectSheet from "react-jss";
import CreateSchoolForm from "./CreateSchoolForm";

const styles = {
  CreateSchoolPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
};

interface PageState {
  image: any;
}

class CreateSchoolPage extends React.Component<any, PageState> {
  constructor(props: any) {
    super(props);
    this.state = {
      image: undefined
    };
  }

  handleAddImage = acceptedFiles => {
    this.setState({ image: acceptedFiles[0] });
  };

  handleCompletion = ({ createSchool: { slug } }) => {
    const { push } = this.props;
    let formData = {
      school: {
        slug,
        image: this.state.image
      }
    };
    axios
      .post(`${API_URL}/upload`, objectToFormData(formData))
      .then(response => {
        push("/");
      });
  };

  render() {
    const { image } = this.state;
    return (
      <Mutation mutation={CREATE_SCHOOL} onCompleted={this.handleCompletion}>
        {createSchool => (
          <CreateSchoolForm
            onSubmit={values => {
              createSchool({ variables: values });
            }}
            update={(cache, { data: { createSchool } }) => {
              console.log("HEELO");
              console.log(createSchool);
              const cacheData = cache.readQuery({ query: ALL_SCHOOLS });
              console.log(cacheData);
            }}
            handleAddImage={this.handleAddImage}
            image={image}
          />
        )}
      </Mutation>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

export default injectSheet(styles)(
  connect(null, mapDispatchToProps)(CreateSchoolPage)
);
