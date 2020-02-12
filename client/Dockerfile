FROM node:13.8.0

RUN mkdir -p /app/client
WORKDIR /app/client

ENV PATH /app/client/node_modules/.bin:$PATH

COPY package.json /app/client/package.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent