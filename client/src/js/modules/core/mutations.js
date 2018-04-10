import { gql } from 'apollo-boost'

export const CREATE_SCHOOL = gql`
   mutation createSchool($name: String!, $image: GraphQLScalarType) {
     createSchool(name: $name, image: $image) {
       id
       name
     }
   }
  `