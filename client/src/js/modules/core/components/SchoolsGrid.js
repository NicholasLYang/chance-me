import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import injectSheet from "react-jss";

const styles = {
  SchoolsGrid: {
    display: "grid",
    fontFamily: "Source Serif Pro, serif",
    gridGap: "10px 10px",
    gridTemplateColumns: "auto auto auto",
    gridTemplateRows: "auto auto auto"
  }
};
const SchoolsGrid = ({ classes }) => {
  return (
    <div className={classes.SchoolsGrid}>
      <Query
        query={gql`
          {
            allSchools {
              name
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p> Loading... </p>;
          if (error) return <p> Error: {error} </p>;

          return data.allSchools.map(({ name }) => (
            <div>
              <h2> {name} </h2>{" "}
            </div>
          ));
        }}
      </Query>
    </div>
  );
};

export default injectSheet(styles)(SchoolsGrid);
