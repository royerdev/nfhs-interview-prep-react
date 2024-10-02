# test/models/status_test.rb
require 'test_helper'

class EventTest < ActiveSupport::TestCase
  test "should belong to status" do
    event = Event.reflect_on_association(:status)
    assert_equal :belongs_to, event.macro
  end

  test "should belong to activity" do
    event = Event.reflect_on_association(:activity)
    assert_equal :belongs_to, event.macro
  end

  test "should be valid with a title, date, activity, and status" do
    event = Event.new(title: "Some Event", date: Time.now, activity: Activity.new, status: Status.new)
    assert event.valid?
  end
end
