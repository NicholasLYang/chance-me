Types::ReviewType = GraphQL::ObjectType.define do
  name "Review"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :id, !types.ID
  field :content, types.String
  field :topic, Types::TopicType
  field :school, Types::SchoolType
end
