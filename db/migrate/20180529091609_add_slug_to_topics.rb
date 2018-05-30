class AddSlugToTopics < ActiveRecord::Migration[5.2]
  def change
    add_column :topics, :slug, :string
  end
end
