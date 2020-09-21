# Currency Exchange

Simple app to display exchange rates for different currencies.

### Contents

- API source code (@ '/' path)
- Frontend react app (@ '/client/' path)

# Prerequisites

- [Node.js](https://nodejs.org/) is already installed

### Tech

Currency Exchange app uses following technologies:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Node.js](https://nodejs.org/) - evented I/O for the backend
- [Express](https://expressjs.com/) - fast node.js network app framework [@tjholowaychuk]
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - A cloud MongoDB service

### Installation

Install the dependencies for server

```sh
$ npm install
$ npm install -g concurrently
```

and client...

```sh
$ cd client
$ npm install
```

### Steps to run

Method 1: Run server and client separately using

```sh
$ npm run server
```

and...

```sh
$ npm run client
```

Method 2: Start server and client concurrently

```sh
$ npm run dev
```

or...

```sh
$ concurrently "npm run server" "npm run client"
```

#### Open http://localhost:3000 in the browser
