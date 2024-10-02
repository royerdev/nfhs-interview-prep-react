# test/models/activity_test.rb
require 'test_helper'

class ActivityTest < ActiveSupport::TestCase
  test "should have many events" do
    activity = Activity.reflect_on_association(:events)
    assert_equal :has_many, activity.macro
  end

  test "should be valid with a name" do
    activity = Activity.new(name: "Some Activity")
    assert activity.valid?
  end

  test "should be invalid without a name" do
    activity = Activity.new
    assert_not activity.valid?, "Activity is valid without a name"
    assert_includes activity.errors[:name], "can't be blank"
  end

  test "should require a unique name" do
    Activity.create!(name: "Some Other Activity")
    activity2 = Activity.new(name: "Some Other Activity")

    assert_not activity2.valid?, "Activity is valid with a duplicate name"
    assert_includes activity2.errors[:name], "has already been taken"
  end
end
