FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

# RUN chmod -R 765 bash/entrypoint.sh

RUN npm install -g @nestjs/cli@7.5.6

RUN npm install --save @nestjs/typeorm typeorm sqlite3

RUN npm i @nestjsi/class-validator

USER node

WORKDIR /home/node/app