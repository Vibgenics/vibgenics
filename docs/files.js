
const fs = require('fs');;
//read
fs.readFile('./docs/blog.txt', (error, data) => {
    if (error) {
        consple.log(error);
    }
    console.log(data.toString());
});

//write
fs.writeFile('./docs/blog1.txt', 'hello world', () => {
    console.log('file was written');
});

//directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('datat created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}

//deletefiles

if (fs.existsSync('./docs/blog.txt')) {
    fs.unlink('./docs/blog.txt', (error) => {
        if (error) {
            console.log(err);
        }
        console.log('file deleted');
    });
}