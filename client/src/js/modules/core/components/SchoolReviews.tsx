import * as React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import Review from "./Review"

const schoolReviewsQuery = gql`
  query schoolReviewsQuery($id: ID!) {
    schoolById(id: $id) {
      reviews {
        id
        content
        topic {
          name
        }
      }
    }
  }
`;

const SchoolReviews = ({ data: { loading, error, schoolById } }) => {
  if (loading) return <div> Loading... </div>;
  if (error) return <div> Error </div>;
  return (
    <div>
      {schoolById.reviews.map(({ id, content }) => (
        <Review key={id} content={content} />
      ))}
    </div>
  );
};

export default graphql(schoolReviewsQuery, {
  options: ({ schoolId }) => ({ variables: { id: schoolId } })
})(SchoolReviews);
