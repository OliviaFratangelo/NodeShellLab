// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line

process.stdin.on('data', (data) => {
    const path = require('path');

    const currentDirectory = process.cwd();
    const fullPath = path.resolve(currentDirectory);

    console.log(fullPath);
})

