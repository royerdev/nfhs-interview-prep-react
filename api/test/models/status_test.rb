# test/models/status_test.rb
require 'test_helper'

class StatusTest < ActiveSupport::TestCase
  test "should have many events" do
    status = Status.reflect_on_association(:events)
    assert_equal :has_many, status.macro
  end

  test "should be valid with a name" do
    status = Status.new(name: "Some Status")
    assert status.valid?
  end

  test "should be invalid without a name" do
    status = Status.new
    assert_not status.valid?, "Status is valid without a name"
    assert_includes status.errors[:name], "can't be blank"
  end

  test "should require a unique name" do
    Status.create!(name: "Some Other Status")
    status2 = Status.new(name: "Some Other Status")

    assert_not status2.valid?, "Status is valid with a duplicate name"
    assert_includes status2.errors[:name], "has already been taken"
  end
end
