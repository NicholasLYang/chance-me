class AddSchoolIdToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :school_id, :integer
  end
end
