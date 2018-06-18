import * as React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import School from "./School";
import SchoolReviews from "./SchoolReviews";

const schoolPageQuery = gql`
  query schoolBySlug($slug: String!) {
    schoolBySlug(slug: $slug) {
      id
      name
      gist
      description
      medium_image_url      
    }
  }
`;

const SchoolPage = ({ data: { loading, error, schoolBySlug } }) => {
  if (loading) return <div> Loading... </div>;
  if (error) return <div> Error </div>;
  console.log(schoolBySlug.id);
  return <div>
    <School {...schoolBySlug} />
    <SchoolReviews schoolId={schoolBySlug.id}/>
  </div>
};

export default graphql(schoolPageQuery, {
  options: ({ match }) => ({ variables: { slug: match.params.slug }})
})(SchoolPage);
