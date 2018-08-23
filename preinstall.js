const fs = require('fs');

fs.createWriteStream('./bin/pact').close();
fs.createWriteStream('./bin/pact-broker').close();
fs.createWriteStream('./bin/pact-message').close();
fs.createWriteStream('./bin/pact-mock-service').close();
fs.createWriteStream('./bin/pact-provider-verifier').close();
fs.createWriteStream('./bin/pact-stub-service').close();
