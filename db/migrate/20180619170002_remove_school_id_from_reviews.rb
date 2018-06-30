class RemoveSchoolIdFromReviews < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :school_id
    remove_column :reviews, :topic_id
    add_column :reviews, :section_id, :integer
  end
end
