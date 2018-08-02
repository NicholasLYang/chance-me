import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import School from "./School";
import SchoolReviews from "./SchoolReviews";
import injectSheet from "react-jss";
import { compose } from "redux";

const schoolPageQuery = gql`
  query schoolBySlug($slug: String!) {
    schoolBySlug(slug: $slug) {
      id
      name
      gist
      description
      image_url
    }
  }
`;

const styles = {
  SchoolPage: {
    width: "100%"
  }
};

const SchoolPage = ({ classes, data: { loading, error, schoolBySlug } }) => {
  if (loading) return <div> Loading... </div>;
  if (error) return <div> Error </div>;
  return (
    <div className={classes.SchoolPage}>
      <School {...schoolBySlug} />
      <SchoolReviews schoolId={schoolBySlug.id} />S
    </div>
  );
};

export default compose(
  graphql(schoolPageQuery, {
    options: ({ match }) => ({ variables: { slug: match.params.slug } })
  }),
  injectSheet(styles)
)(SchoolPage);
