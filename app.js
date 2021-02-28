const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://rainak_77:Office323@cluster0.c1bqa.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000))
    .catch((error) => console.log(error));

//register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myview');
//listen for Request express 



//middleware and static files
app.use(express.static('public'));

//custom middle year
// app.use((req, res, next) => {
//     console.log('request made');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:', req.method);
//     next();
// });

app.use(morgan('dev'));

// app.use((req, res, next) => {
//     console.log('next middleware');
//     next();
// });

app.get('/', (req, res) => {
    const blogs = [
        { title: 'arif', snippet: 'lorem jipsum' },
        { title: 'bob', snippet: 'lorem jipsum' },
        { title: 'taylor', snippet: 'lorem jipsum' }
    ];
    // res.send('<p>Hello express app</p>');
    res.render('index', { title: 'Home', blogs: blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });

    // res.send('<p>Hello express app</p>');
});
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new page' });
});

//redirects
// app.get('/about-me', (req, res) => {
//    res.render('about', { title: 'About' });
// });

//404 pages

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});