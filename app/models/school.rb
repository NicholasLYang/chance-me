class School < ApplicationRecord
  include Rails.application.routes.url_helpers
  
  has_one_attached :image

  def image_url
    return nil unless image.attached?
    rails_blob_url(self.image, host: "http://localhost:3000")
  end
end
