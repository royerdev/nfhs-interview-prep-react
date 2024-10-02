# test/controllers/events_controller_test.rb
require 'test_helper'

class EventsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    Event.delete_all
    
    status = Status.create!(name: "Scheduled")
    activity = Activity.create!(name: "Some Activity")

    event1 = Event.create!(title: "Event 1", date: Time.now, status: status, activity: activity)
    event2 = Event.create!(title: "Event 2", date: Time.now, status: status, activity: activity)

    get events_url

    assert_response :success

    json_response = JSON.parse(response.body)
    
    assert_equal 2, json_response.length
    assert_equal event1.title, json_response[0]['title']
    assert_equal event2.title, json_response[1]['title']
  end
end
