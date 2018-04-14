import * as React from "react"
import gql from "graphql-tag"
import {Query} from "react-apollo";

const SchoolPage = ({ match }) => {
  return (
    <Query query={gql`
      schoolBySlug
    `}>
    </Query>
  )
};