class Post < ApplicationRecord
  mount_uploader :image, ImageUploader
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :likes
  has_many :liked_users, through: :likes, source: :user

  validates :title, presence: true, length: {maximum: 20}
  validates :text, presence: true, length: {maximum: 400}
end
