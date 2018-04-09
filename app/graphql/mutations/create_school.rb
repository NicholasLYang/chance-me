class Mutations::CreateSchool < GraphQL::Function
  argument :name, !types.String

  type Types::SchoolType

  def call(_obj, args, ctx)
    School.create(name: args["name"])
  end
end
