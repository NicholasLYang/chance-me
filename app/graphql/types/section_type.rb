Types::SectionType = GraphQL::ObjectType.define do
  name "Section"
  # Add root-level fields here.
  # They will be entry points for queries on your schema.

  field :id, !types.ID
  field :reviews, types[Types::ReviewType]
  field :topic, Types::TopicType do
    description "Get topic for section"
    resolve ->(obj, args, ctx) {
      Loaders::RecordLoader.for(Topic).load(obj.topic_id)
    }    
  end
  
end
