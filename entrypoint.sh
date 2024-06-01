#!/bin/bash

bundle install
npm install

exec "$@"
