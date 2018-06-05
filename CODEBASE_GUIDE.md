# Codebase Guide

So you've decided to contribute, but you have no idea what's in this
repo and how any of it works. Great! We've all been there. This
document will go over the high level organization of the codebase and
hopefully give you some ideas on how you can contribute.

If you have any problems at all, please email me at `ny585 at nyu.edu`.

## Rails

Most of the files that you see are standard boilerplate from Ruby on
Rails. Ruby on Rails is a framework that's known for its comprehensive
approach to web development. Basically, it includes a lot of features,
which comes with a lot of folders. It's totally okay if you don't know
all of them. For now, let's focus on these three:

 - app/
 - db/
 - spec/
 
 `app` is going to be where you write most of your code. It contains
 the folders for, models, views, controllers and GraphQL based
 code. If you don't know what any of that is, I would suggest reading
 up on [Ruby on Rails](https://rubyonrails.org/) and
 [GraphQL](https://graphql.org/learn/) along with
 [graphql-ruby](https://github.com/rmosolgo/graphql-ruby).
 
 `db` is where the database specific info is stored. If you want to
 get an eye for what each of the models contains, read `schema.rb`. If
 you want to see how the database has changed over time, check out
 `migrations/`
 
 `spec` is where rspec tests are written. Right now it's pretty
 sparse, but hopefully as time goes on we'll build up a good test
 suite. This is a good place to start contributing, as tests are a
 great way to document the existing code.
 
 The rest of the folders you probably won't need to touch.
 
## React
 
 The React code is stored in the `client/` folder. The reasoning
 behind this is that I wanted a "monorepo", basically, I wanted all of
 the code in one central repo. Now sure, I could have split the client
 into a separate repo and the API into a separate repo, but that would
 have made contributing a lot more confusing, and would then require
 building two separate apps in two separate folders. Not to mention, I
 can now have one streamlined build pipeline. 
 
 Inside client is a standard
 [Greedux](https://github.com/rob2d/greedux) setup. Greedux is a
 generator made by my friend Rob that sets up a React/Redux app. I've
 modified it slightly to use TypeScript, but fundamentally it's the
 same. The majority of the code will go into `src/js/modules`. Greedux
 is organized into modules, each module comes with its own Redux
 reducer (in `MODULE_NAME/reducer.js`), actions (in
 `MODULE_NAME/actions.js`), and components (in
 `MODULE_NAME/components/`). Greedux uses a build system built using a
 task runner called Gulp. Right now I'm not too worried about
 splitting my code into modules. Most of the code is going into a
 `core/` module, with some of the form logic going into a `forms/`
 module.
 


 
