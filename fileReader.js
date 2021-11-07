const fs = require('fs');

const content = "blaha blah balh"

fs.writeFile('test.txt', content, err => {
    if(err)
    {
        console.err;
        return;
    }
});
