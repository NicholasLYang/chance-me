require 'graphql/batch'

SchoolSeekerSchema = GraphQL::Schema.define do
  mutation(Types::MutationType)
  query(Types::QueryType)

  use GraphQL::Batch
end
