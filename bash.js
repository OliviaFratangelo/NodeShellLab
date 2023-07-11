// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line

// we can access the pwd function and store it in a variable like so
const pwd = require('./pwd');

// if a user enters 'pwd' as an argument, we can then call it
pwd();

const ls = require('./ls')
