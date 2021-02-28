// console.log(global);




const x = setInterval(() => { console.log('hello'); }, 1000);
setTimeout(() => {
    console.log('heloo-------');
    clearInterval(x);
}, 5000);

console.log(__dirname);
console.log(__filename);
