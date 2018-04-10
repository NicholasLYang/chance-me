class Mutations::CreateSchool < GraphQL::Function
  argument :name, !types.String
  argument :image, !Types::Scalars::FileType

  type Types::SchoolType

  def call(_obj, args, ctx)
    filename = File.basename(args["image"])
    school = School.new(name: args["name"])
    school.image.attach(io: args["image"], filename: filename)
    school.save!
  end
end
