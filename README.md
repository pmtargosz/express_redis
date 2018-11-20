# Overview

Playground for express, redis.

## Installation

First, clone this repo and change to the directory:
```bash
$ git clone git@github.com:pmtargosz/<project>.git
$ cd <project>
```

### Install

```bash
$ npm install
```

### Run Dev Environment

```bash
$ npm run dev
# http://localhost:3000
```

### Run

```bash
$ docker-compose up
```

## Example

### Store some data
```bash
$ curl http://localhost:3000/store/my-key?some=value_test&some-other=other-value
```

### Retrieve that data
```bash
$ curl http://localhost:3000/my-key
```

## Resources
* [expressjs](https://expressjs.com/) - Express is a web application framework for Node.js, released as free and open-source software under the MIT License.
* [redis](https://redis.io/) - Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker.

## License
[MIT](https://opensource.org/licenses/MIT)

