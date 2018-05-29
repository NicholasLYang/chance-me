import gql from "graphql-tag";

export const ALL_SCHOOLS = gql`
  query getAllSchools {
    allSchools {
      id
      name
      slug
      medium_image_url
    }
  }
`;
