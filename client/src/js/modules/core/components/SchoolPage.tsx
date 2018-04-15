import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import School from "./School";

const schoolBySlugQuery = gql`
  query schoolBySlug($slug: String!) {
    schoolBySlug(slug: $slug) {
      name
      topic_sentence
      description
      medium_image_url
    }
  }
`;

const SchoolPage = ({ match }) => {
  return (
    <Query query={schoolBySlugQuery} variables={{ slug: match.params.slug }}>
      {({ loading, error, data }) => {
        if (loading) return <div> Loading... </div>;
        if (error) return <div> Error </div>;
        return <School {...data.schoolBySlug} />;
      }}
    </Query>
  );
};

export default SchoolPage;
