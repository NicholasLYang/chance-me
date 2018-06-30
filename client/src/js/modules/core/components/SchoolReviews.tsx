import * as React from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { School, Variables } from "../types";
import SchoolSection from "./SchoolSection";

const schoolReviewsQuery = gql`
  query schoolReviewsQuery($id: ID!) {
    schoolById(id: $id) {
      sections {
        id
        reviews {
          id        
          content
        }
        topic {
          name
          color
        }
      }
    }
  }
`;

const SchoolReviews = ({ data: { loading, error, schoolById } }) => {
  if (loading) return <div> Loading... </div>;
  if (error) return <div> Error </div>;
  const { sections } = schoolById;
  return (
    <div>
      {sections.map(section =>
        <SchoolSection key={section.id} section={section}/>
      )}
    </div>
  );
};

type Response = {
  schoolById: School;
};

type InputProps = {
  schoolId: string;
};

const withQuery = graphql<InputProps, Response, Variables>(schoolReviewsQuery, {
  options: ({ schoolId }) => ({ variables: { id: schoolId } })
});

export default withQuery(SchoolReviews);
