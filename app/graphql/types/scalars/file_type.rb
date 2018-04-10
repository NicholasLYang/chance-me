# app/graphql/types/scalars/file_type.rb
# http://guides.rubyonrails.org/autoloading_and_reloading_constants.html
# create directories corresponding module structure, so you don't need to setup autoload_paths

# this custom scalar type will be used for a mutation input parameter
Types::Scalars::FileType = GraphQL::ScalarType.define do
      name "File"
      description "action_dispatch_uploaded_file"
      coerce_input ->(action_dispatch_uploaded_file, ctx) {
        action_dispatch_uploaded_file
      }
end

