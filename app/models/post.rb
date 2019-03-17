class Post < ApplicationRecord
  mount_uploader :image, ImageUploader
  belongs_to :user
  has_many :comments

  validates :title, presence: true, length: {maximum: 20}
  validates :text, presence: true, length: {maximum: 400}
end
