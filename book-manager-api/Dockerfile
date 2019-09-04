FROM node:10-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 9000

ENTRYPOINT ["/usr/local/bin/node", "index.js"]