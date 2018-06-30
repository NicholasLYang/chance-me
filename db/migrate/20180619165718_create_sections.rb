class CreateSections < ActiveRecord::Migration[5.2]
  def change
    create_table :sections do |t|
      t.string :summary
      t.integer :topic_id
      t.integer :school_id
      t.timestamps
    end
  end
end
