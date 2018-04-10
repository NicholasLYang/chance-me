command -v ruby >/dev/null 2>&1 || { echo >&2 "Ruby 2.5.0 required.  Aborting."; exit 1; }
command -v bundle >/dev/null 2>&1 || { echo >&2 "Bundler required to install dependencies. Please install with "gem install bundler"  Aborting."; exit 1; }
bundle install
cd client
command -v npm >/dev/null 2>&1 || { echo >&2 "npm required to install dependencies. Aborting."; exit 1; }
npm install
