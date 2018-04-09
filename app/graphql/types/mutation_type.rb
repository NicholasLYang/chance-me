Types::MutationType = GraphQL::ObjectType.define do
  name "Mutation"

  field :createSchool, function: Mutations::CreateSchool.new
end
