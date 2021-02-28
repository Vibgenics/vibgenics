const fs = require('fs');

const readStream = fs.createReadStream('./docs/stream.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/writeStrm.txt');

// readStream.on('data', (chunk) => {
//     console.log('---------------------------New chunk------------------------------------------');
//     console.log(chunk);
//     writeStream.write('\n new chunck \n');
//     writeStream.write(chunk);
// });


//pipping

readStream.pipe(writeStream);