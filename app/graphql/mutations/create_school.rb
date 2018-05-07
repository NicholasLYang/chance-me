class Mutations::CreateSchool < GraphQL::Function
  argument :name, !types.String
  argument :description, types.String
  argument :topic_sentence, types.String

  type Types::SchoolType

  def call(_obj, args, ctx)
    School.create(
      name: args["name"],
      description: args["description"],
      topic_sentence: args["topic_sentence"]
    )
  end
end
