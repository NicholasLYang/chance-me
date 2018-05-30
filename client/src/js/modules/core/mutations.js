import { gql } from "apollo-boost";

export const CREATE_SCHOOL = gql`
  mutation createSchool($name: String!) {
    createSchool(name: $name) {
      id
      slug
      name
      medium_image_url
    }
  }
`;
