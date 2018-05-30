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

interface PageProps {
  push: (string) => void;
}

class CreateSchoolPage extends React.Component<PageProps, PageState> {
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
      <Mutation
        mutation={CREATE_SCHOOL}
        onCompleted={this.handleCompletion}
        refetchQueries={['getAllSchools']}
      >
        {createSchool => (
          <CreateSchoolForm
            onSubmit={values => {
              createSchool({ variables: values });
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
