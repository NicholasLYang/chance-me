Types::TopicType = GraphQL::ObjectType.define do
  name "Topic"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :id, !types.ID
  field :slug, types.String
  field :name, types.String
  field :color, types.String
end
