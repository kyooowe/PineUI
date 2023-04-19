![Logo](https://mir-s3-cdn-cf.behance.net/project_modules/1400/74731f76965389.5c7945b0cfcc3.gif)

# Express-Boilerplate

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)

A boilerplate/template for building RestAPI's using NodeJS, TypeScript, Express and Mongoose

## Installation

#### Clone the Repo

```
- Clone the project https://github.com/kyooowe/ecommerce-portal.git
- Open terminal
```

#### Install the dependencies

```bash
  npm i
  or
  yarn install
```

#### Setup .env

```
  Create .env file in root folder and Add the following
  PORT=yourChoicePort
  TOKEN_KEY=yourChoiceTokenKey
  MONGO_DB=yourMongoDbConnection/
  MONGO_DB_SCHEMA=mongoDbSchema
  MAILER_USER=emailAccount
  MAILER_PASSWORD=emailPassword (this is provided by your email provider if google (try to check App Password))
```

## Documentation

#### Framework and Libraries

-   [ExpressJS](https://expressjs.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Mongoose](https://mongoosejs.com/)
-   [Jest](https://jestjs.io/)
-   [Supertest](https://github.com/ladjs/supertest)
-   [CryptoJS](https://cryptojs.gitbook.io/docs/)
-   [NodeMailer](https://nodemailer.com/about/)

## Features

-   NoSQL database using MongoDB
-   JWT Authentication
-   Password encryption using CryptoJS
-   Cron Job
-   Testing: automated testing using Jest
-   Dependency management with NPM
-   Environment variables using cross-env and dotenv
-   CORS
-   Git hooks using hustky and lint-staged
-   Linting using prettier, eslint and tslint
-   Compression using GZIP
-   Middleware HTTP Protection using Helmet
-   Email sender using NodeMailer

## Folder Structure

    - Src
        - Config        (project configurations)
        - Controller    (project controllers/services)
        - Helpers       (project custom helpers)
        - Inteface      (global interface in project)
        - Middleware    (projects custom middleware)
        - Models        (mongoose schemas)
        - Routes        (projects routes)

#### Steps for creating API

    - Create your own interface in inteface (Folder)
    - Create schemas in models (Folder)
    - Add your services in controller (Folder)

## Commands

#### Run local

```
npm run start
```

#### Test

```
npm run test
```

### Linting

```
npm run lint
```

## Roadmap

-   Socket.io
-   Logger

## Author

-   [@kyooowe](https://www.github.com/kyooowe)
