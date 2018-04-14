import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import SchoolsGrid from "./SchoolsGrid";

const HomePage = () => {
  return (
    <Query
      query={gql`
        {
          allSchools {
            id
            name
            medium_image_url
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p> Loading... </p>;
        if (error) return <p> Error. Data failed to fetch </p>;

        return <SchoolsGrid schools={data.allSchools} />;
      }}
    </Query>
  );
};

export default HomePage;
