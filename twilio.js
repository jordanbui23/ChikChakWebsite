// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
const accountSid = "";
const authToken = "";

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    to: '+19132656747',
    from: '+19139149044',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  })
  .then(message => console.log(message.sid));
