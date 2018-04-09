class School < ApplicationRecord
  include Rails.application.routes.url_helpers
  
  has_one_attached :image

  def image_url
    return nil unless image.attached?
    rails_blob_url(image, host: "http://localhost:3000")
  end

  def medium_image_url
    return nil unless image.attached?
    return "http://localhost:3000" +
           image.variant(resize: "400x400>").processed.service_url
  end

end
