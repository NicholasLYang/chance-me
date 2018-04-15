class AddTopicSentenceToSchools < ActiveRecord::Migration[5.2]
  def change
    add_column :schools, :topic_sentence, :string
  end
end
