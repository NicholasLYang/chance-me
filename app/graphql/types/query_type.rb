Types::QueryType = GraphQL::ObjectType.define do
  name "Query"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :allSchools, types[Types::SchoolType] do
    description "Get all schools"
    resolve ->(obj, args, ctx) {
      School.all
    }
  end
end
