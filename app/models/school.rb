class School < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  include Rails.application.routes.url_helpers

  HOST = Rails.env.development? ? "http://localhost:3000" : "http://api.chance-me.com"
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
