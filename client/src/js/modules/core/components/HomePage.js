import * as React from "react";
import { Query } from "react-apollo";
import SchoolsGrid from "./SchoolsGrid";
import {ALL_SCHOOLS} from "../queries";

const HomePage = () => {
  return (
    <Query
      query={ALL_SCHOOLS}
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
