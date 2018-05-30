class Review < ApplicationRecord
  belongs_to :topic
  belongs_to :school
end
