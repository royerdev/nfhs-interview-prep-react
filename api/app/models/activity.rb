class Activity < ApplicationRecord
  has_many :events

  validates :name, presence: true, uniqueness: true
end
