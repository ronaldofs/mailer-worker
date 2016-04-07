FROM node:latest

ADD package.json /src/package.json

RUN cd /src && npm install

ADD . /src

WORKDIR /src

# CMD ["npm", "run", "production"]
