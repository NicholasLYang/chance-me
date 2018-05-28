import gql from "graphql-tag";

export const ALL_SCHOOLS = gql`
  {
    allSchools {
      id
      name
      slug
      medium_image_url
    }
  }
`;
