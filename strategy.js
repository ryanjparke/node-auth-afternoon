const Auth0Strategy = require('passport-auth0');
const config = require(`${__dirname}/config.js`);
const { domain, clientID, clientSecret } = config;

module.exports = new Auth0Strategy({
    domain: domain,
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: 'http://localhost:3001/login'
},
function(accessToken, refreshToken, extraParams, profile, done) {
    console.log(profile);
    


    return done(null, profile);
}
);