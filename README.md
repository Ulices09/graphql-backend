# graphql-backend

## Description

Backend developed using TypeScript, Express, apollo-server, Prisma and MongoDB.

## Getting Started

Add .env file to root of project. It should contain the following variables:

```
PORT=4000
DATABASE_URL="mongodb+srv://<user>:<password>@<host>:<port>/<database>"
```


## Commands

### Installation

```bash
yarn install
```


### Runing the application

```bash
yarn start
```


### Runing unit tests

```bash
yarn test
```


## Running with Docker

### Build the image

```bash
docker build -t <image_name> .
```

### Run the image

```bash
docker run -p 4000:4000 -t <image_name>
```