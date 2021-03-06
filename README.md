# ChanceMe
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

ChanceMe is a website that helps you find the perfect fit for
college. It uses a combination of crowd sourced reviews, data
collection and rankings to help find the best possible place to spend
your next 4 years.

ChanceMe is built using Ruby on Rails with a React front end. It
uses GraphQL to communicate with Apollo on the front end and GraphQL
Ruby on the back end.

To run locally:

1. Install [NodeJS](https://nodejs.org/en/) (at least version 6, but
ideally 8)

2. Install [Ruby 2.5.0](https://www.ruby-lang.org/en/)
([rbenv](https://github.com/rbenv/rbenv) highly recommended)

3. Install dependencies by running `./install.sh`

4. Run the development servers with  `./run.sh`

The front end should be running on http://localhost:3002 and the back
end should be running on http://localhost:3000.

Contributions are welcome! Please read [this](/CONTRIBUTING.md) for more info

Read the [Codebase Guide](/CODEBASE_GUIDE.md) for information on the
codebase layout.
