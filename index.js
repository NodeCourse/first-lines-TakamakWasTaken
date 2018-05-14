const fs = require('fs');
var date;
const fileName = 'date.txt'

//console.log(date);
if(fileName.exists)

function read() {
    var contents = fs.readFileSync(fileName, 'utf8');
    console.log(contents);
}

function writeDate() {
    fs.appendFile(fileName, Date.now() + '\r\n');

    read();
}

setInterval(writeDate, 1000);