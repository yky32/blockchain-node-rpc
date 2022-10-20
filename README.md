[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the node and app in Docker

Goto `litecoin-node.ts` and ensure that the `host` is set to `node` since this is the hostname exposed by docker's networking

You need to then build an image of the microservice by doing so

```bash
$ docker build -t litecoin-ms:latest .
```

You also need to build the image of the node by going to `litecoin-image` and running

```bash
docker build -t ltc/litecoin:v0.21.2.1 .
```

Once the images are built, run the compose command to start the containers

```bash
$ docker compose up
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```