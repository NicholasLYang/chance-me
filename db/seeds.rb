# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


School.create([
                { name: "Columbia University" },
                { name: "Harvard University" },
                { name: "Yale University" }
              ])

School.find_each do |school|
  f = File.open(Rails.root + "db/columbia.jpg")
  school.image.attach(io: f, filename: "my_img.jpg") unless
    school.image.attached?
end
