class School < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged
  has_many :sections

  include Rails.application.routes.url_helpers

  HOST = Rails.env.development? ? "http://localhost:3000" : "http://api.chance-me.com"
  has_one_attached :image


  # TODO: Turn this query into a proper GraphQL resolver.
  def reviews_by_topic
    ActiveRecord::Base.connection.execute(
      'SELECT topics.name, array_agg(content) FROM reviews AS r JOIN sections ON sections.id = r.section_id JOIN topics ON topics.id = sections.topic_id WHERE sections.school_id = 1 GROUP BY topics.name'
    );

  end

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
