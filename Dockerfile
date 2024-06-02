FROM ruby:3.3.1

RUN apt-get update -qq \
    && apt-get install -y \
      build-essential nodejs npm tmux

WORKDIR /app

COPY Gemfile Gemfile.lock /app/

RUN bundle install

COPY . /app/

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
