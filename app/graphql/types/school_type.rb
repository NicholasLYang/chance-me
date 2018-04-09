Types::SchoolType = GraphQL::ObjectType.define do
  name "School"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :name, types.String
  field :image_url, types.String
end
