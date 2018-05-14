const fs = require('fs');
const fileName = 'date.txt';

function writeAndRead() {
    fs.appendFile(fileName, Date.now() + '\r\n');

    var contents = fs.readFileSync(fileName, 'utf8');
    console.log(contents);
}

setInterval(writeAndRead, 1000);