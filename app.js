const validator = require('validator');
const getNotes = require('./notes');

console.log(getNotes());

console.log(validator.isURL('htts://mead.io'));