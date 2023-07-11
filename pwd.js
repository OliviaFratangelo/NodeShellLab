module.exports = function () {
    // pwd code
    process.stdin.on('data', (data) => {
        const path = require('path');
    
        const currentDirectory = process.cwd();
        const fullPath = path.resolve(currentDirectory);
    
        console.log(fullPath);
    })
  };