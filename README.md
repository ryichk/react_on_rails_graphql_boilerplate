# react_on_rails_graphql_boilerplate

## Versions

- Ruby
  - 3.3.1
- Ruby on Rails
  - 7.1.3
- MySQL
  - 8.0
- Node.js
  - 18+
- TypeScript
  - 5
- React
  - 18

## Start Server

```sh
docker-compose up
```

## Create Database

```sh
docker-compose exec app rails db:create
```

## Run RuboCop in an autocorrect mode

```sh
docker-compose exec app rubocop -a
```

## Run RSpec

```sh
docker-compose exec app rspec
```

## Run ESLint and Prettier

```sh
docker-compose exec app npm run fix
```

## Run GraphQL-Codegen

```sh
docker-compose exec app npm run graphql:codegen
```
