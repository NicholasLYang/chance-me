class Section < ApplicationRecord
  has_many :reviews
  belongs_to :topic
  belongs_to :school
end
