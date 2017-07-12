FROM node:6.9.1

RUN mkdir /src

RUN apt-get update && apt-get install -y --no-install-recommends \
    mysql-client

RUN npm install nodemon mocha -g

WORKDIR /src
ADD package.json package.json
RUN npm install

ADD nodemon.json nodemon.json
