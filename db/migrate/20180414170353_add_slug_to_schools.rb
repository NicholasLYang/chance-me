class AddSlugToSchools < ActiveRecord::Migration[5.2]
  def change
    add_column :schools, :slug, :string
  end
end
