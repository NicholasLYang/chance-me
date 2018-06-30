class AddColorToTopic < ActiveRecord::Migration[5.2]
  def change
    add_column :topics, :color, :string
  end
end
