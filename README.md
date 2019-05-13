# pk-basic-auth

HTTP basic auth middleware for [ApostropheCMS](http://apostrophecms.org/).

This module uses [express-basic-auth](https://www.npmjs.com/package/express-basic-auth).

This module provides HTTP basic auth in addition to ApostropheCMS's login. This does not log a user into ApostropheCMS. One intended use case of this module is to lockdown an application from the public before the application launches to a set of one or multiple static users.

## Configuration

You should configure usernames and passwords in `data/local.js`.

For a single user:
```js
module.exports = {
  modules: {
    'pk-basic-auth': {
      users: {
        'admin': 'demo'
      }
    }
  }
}
```

## Options

`users`: Takes one or many comma seperated key/value pairs.
