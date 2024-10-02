require 'faker'

# Clear existing data
Event.destroy_all
Status.destroy_all
Activity.destroy_all

# Create statuses
statuses = {
  upcoming: Status.create(name: 'upcoming'),
  live: Status.create(name: 'live'),
  on_demand: Status.create(name: 'on_demand')
}

# Create activities
activities = Activity.create([
  { name: 'Baseball' },
  { name: 'Basketball' },
  { name: 'Cross Country' },
  { name: 'Football' },
  { name: 'Golf' },
  { name: 'Gymnastics' },
  { name: 'Ice Hockey' },
  { name: 'Lacrosse' },
  { name: 'Soccer' },
  { name: 'Softball' },
  { name: 'Swimming' },
  { name: 'Tennis' },
  { name: 'Track and Field' },
  { name: 'Volleyball' },
  { name: 'Wrestling' }
])

# Helper method to generate random date based on status
def generate_event_date(status)
  case status
  when 'upcoming'
    # future date
    Faker::Time.forward(days: rand(1..30), period: :morning)
  when 'live'
     # around the current time
    Faker::Time.between(from: 2.hours.ago, to: Time.now + 1.hour)
  when 'on_demand'
    # past date
    Faker::Time.backward(days: rand(1..60), period: :evening)
  end
end

mascots = ["Eagles", "Vipers", "Panthers", "Bears", "Wildcats", "Tigers", "Lions", "Bulldogs", "Wolves", "Hawks", "Falcons", "Cougars", "Raptors", "Ravens", "Cardinals", "Patriots", "Pirates", "Warriors", "Knights", "Vikings", "Indians", "Braves", "Chiefs", "Redskins", "Cowboys", "Packers", "Buccaneers", "Raiders", "49ers", "Seahawks", "Rams", "Chargers", "Broncos", "Chiefs", "Bills", "Dolphins", "Jets", "Patriots", "Steelers", "Ravens"]

# Generate 100 random events
100.times do
  # Randomly select status and activity
  status = statuses.values.sample
  activity = activities.sample

  # Get the date based on the status
  date = generate_event_date(status.name)

  # Generate random school names
  school_1 = "#{Faker::Address.city} #{mascots.sample}"
  school_2 = "#{Faker::Address.city} #{mascots.sample}"

  Event.create(
    title: "#{school_1} vs #{school_2}",
    date: date,
    status: status,
    activity: activity
  )
end

puts 'Seeded database'
