const basicAuth = require('express-basic-auth');

module.exports = {
  name: 'pk-basic-auth',
  construct: (self, options) => {
    if (options.users) {
      self.expressMiddleware = {
        // Run really early, before all of the stuff
        // apostrophe-express normally puts in
        when: 'beforeRequired',
        middleware: [ basicAuth({
          challenge: true,
          users: options.users
        }) ]
      };
    } else {
      console.log(`ATTENTION: Need to configure options.users.`);
    }
  }
};
