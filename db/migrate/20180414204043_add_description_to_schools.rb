class AddDescriptionToSchools < ActiveRecord::Migration[5.2]
  def change
    add_column :schools, :description, :text
  end
end
