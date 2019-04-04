console.log('Starting app!');
const fs = require('fs');
const os = require('os');
const calc = require('./calc');

const user = os.userInfo();
console.log(calc.addMe(23, -1));
fs.appendFile('greetings.txt', ` hello world ${user.username}`, function() {
});