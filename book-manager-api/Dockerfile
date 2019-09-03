FROM node:10-alpine

WORKDIR /app

COPY . .

run npm install

ENV DATABASE=mongodb://mongodb:27017/bookdata

EXPOSE 9000

ENTRYPOINT ["/usr/local/bin/node", "index.js"]

