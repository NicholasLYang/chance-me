# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

LOREM_IPSUM = "Pellentesque dapibus suscipit ligula.  Donec posuere augue in quam.  Etiam vel tortor sodales tellus ultricies commodo.  Suspendisse potenti.  Aenean in sem ac leo mollis blandit.  Donec neque quam, dignissim in, mollis nec, sagittis eu, wisi.  Phasellus lacus.  Etiam laoreet quam sed arcu.  Phasellus at dui in ligula mollis ultricies.  Integer placerat tristique nisl.  Praesent augue.  Fusce commodo.  Vestibulum convallis, lorem a tempus semper, dui dui euismod elit, vitae placerat urna tortor vitae lacus.  Nullam libero mauris, consequat quis, varius et, dictum id, arcu.  Mauris mollis tincidunt felis.  Aliquam feugiat tellus ut neque.  Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo sit amet elit."

School.create([
                { name: "Columbia University",
                  topic_sentence: "Bunch of try hard losers. Core will murder you",
                  description: LOREM_IPSUM },
                { name: "Harvard University",
                  topic_sentence: "Did you know I went to Harvard? Have I mentioned "\
                                  "that I went to Havard?",
                  description: LOREM_IPSUM },
                { name: "Yale University",
                  topic_sentence: "New Haven isn't that bad!"\
                                  " I swear!",
                  description: LOREM_IPSUM },
                { name: "New York University",
                  topic_sentence: "Midwestern transplant trying to appear artsy"\
                                  " but actually basic af",
                  description: LOREM_IPSUM
                }])

School.find_each do |school|
  f = File.open(Rails.root + "db/columbia.jpg")
  school.image.attach(io: f, filename: "my_img.jpg") unless
    school.image.attached?
end
