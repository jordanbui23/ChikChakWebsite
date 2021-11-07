// Twilio Credentials
// To set up environmental variables, see http://twil.io/secure
const accountSid = "";
const authToken = "";

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

function sendText() {
  client.messages
    .create({
      to: '+19132656747',
      from: '+19139149044',
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    })
    .then(message => console.log(message.sid));
}

function writeToFile(passForm) {
 
  let fso = CreateObject("Scripting.FileSystemObject"); 
  let s = fso.CreateTextFile("test.txt");

  var firstName = document.getElementById('firstName');
  var lastName  = document.getElementById('lastName');

  s.writeline("First Name :" + firstName);
  s.writeline("Last Name :" + lastName);

  s.writeline("-----------------------------");
  s.Close();
}