const fs = require('fs');
fs.writeFile('test.txt', "yo", err => {
    if(err)
    {
        console.err;
        return;
    }
});