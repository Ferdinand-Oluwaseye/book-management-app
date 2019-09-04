FROM node:10-alpine
WORKDIR /build
COPY . .
RUN NG_CLI_ANALYTICS=ci npm install -g @angular/cli
RUN NG_CLI_ANALYTICS=ci npm install
EXPOSE 4200
RUN ng build
