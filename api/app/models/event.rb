class Event < ApplicationRecord
  belongs_to :status
  belongs_to :activity

  validates :title, presence: true
  validates :date, presence: true

  # Override the default as_json method to include the status and activity names instead of their IDs
  def as_json(options = {})
    super(options.merge(include: { status: { only: :name }, activity: { only: :name } })).tap do |hash|
      hash['status'] = self.status.name
      hash['activity'] = self.activity.name
      hash.delete('status_id')
      hash.delete('activity_id')
    end
  end
end
