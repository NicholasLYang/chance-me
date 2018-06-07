class AddGistToSchools < ActiveRecord::Migration[5.2]
  def change
    add_column :schools, :gist, :string
  end
end
