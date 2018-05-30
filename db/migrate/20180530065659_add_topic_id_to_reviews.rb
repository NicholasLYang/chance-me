class AddTopicIdToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :topic_id, :integer
  end
end
