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

  field :schoolBySlug, Types::SchoolType do
    description "Get school by slug"
    argument :slug, types.String
    resolve ->(obj, args, ctx) {
      School.friendly.find(args["slug"])
    }
  end

  field :allTopics, types[Types::TopicType] do
    description "Get all topics"
    resolve ->(obj, args, ctx) {
      Topic.all
    }
  end

end
