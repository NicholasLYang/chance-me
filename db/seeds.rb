# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

School.create(
  [
    { name: "Harvard University" ,
      image: File.open(Rails.root + 'db/seed_images/harvard.jpg')},
    { name: "South Harmon Institute of Technology",
      image: File.open(Rails.root + 'db/seed_images/south_harmon.jpg')},
    { name: "New York University",
      image: File.open(Rails.root + 'db/seed_images/nyu.jpg')},
    { name: "Yale University",
      image: File.open(Rails.root + 'db/seed_images/nyu.jpg')},
    { name: "Princeton University" , 
      image: File.open(Rails.root + 'db/seed_images/princeton.jpg')},
    { name: "Stanford University" , 
      image: File.open(Rails.root + 'db/seed_images/stanford.jpg')},
    { name: "University of Waterloo" , 
      image: File.open(Rails.root + 'db/seed_images/waterloo.jpg')},
    { name: "University of Toronto", 
      image: File.open(Rails.root + 'db/seed_images/toronto.jpg') }
  ]
)
