FROM ruby:2.7.0

RUN apt-get update -qq && apt-get install -y mariadb-client build-essential nodejs apt-transport-https

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn
RUN yarn install --check-files
RUN yarn upgrade

RUN mkdir -p /app/server
WORKDIR /app/server
COPY Gemfile /app/server/Gemfile
COPY Gemfile.lock /app/server/Gemfile.lock
RUN bundle install -j4
COPY . /app/server