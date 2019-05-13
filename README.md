# pk-basic-auth

HTTP basic auth middleware for [ApostropheCMS](http://apostrophecms.org/).

This module uses [express-basic-auth](https://www.npmjs.com/package/express-basic-auth)

## Example

For a single user:
```js
'pk-basic-auth': {
  users: {
    'admin': 'demo'
  }
}
```

For multiple users:
```js
'pk-basic-auth': {
  users: {
    'admin1': 'demo1',
    'admin2': 'demo2'
  }
}
```
