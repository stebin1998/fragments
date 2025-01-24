const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const logger = require('./logger');

let useMockAuth = process.env.USE_MOCK_AUTH === 'true';

if (useMockAuth) {
  logger.warn('Using mock authentication for development');
}

const mockUsers = {
  'mock-user@example.com': {
    email: 'mock-user@example.com',
    name: 'Mock User',
  },
};

module.exports.strategy = () =>
  useMockAuth
    ? new BearerStrategy((token, done) => {
        const user = mockUsers[token];
        if (!user) {
          return done(null, false);
        }
        return done(null, user);
      })
    : new BearerStrategy((token, done) => {
        logger.error('Real authentication is not implemented yet.');
        done(null, false);
      });

module.exports.authenticate = () => passport.authenticate('bearer', { session: false });
