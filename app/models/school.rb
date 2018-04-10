class School < ApplicationRecord
  include Rails.application.routes.url_helpers

  HOST = "http://localhost:3000"
  has_one_attached :image

  def image_url
    return nil unless image.attached?
    rails_blob_url(image, host: HOST)
  end

  def medium_image_url
    return nil unless image.attached?
    return rails_representation_url(image.variant(resize: "400x400>"),
                                    host: HOST)
  end

end
