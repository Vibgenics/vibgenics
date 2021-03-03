const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { render } = require('ejs');

const blogRoutes = require('./routes/blogRoutes');

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

//middleware for excepting form data
app.use(express.urlencoded({ extended: true }));
//middleware logger
app.use(morgan('dev'));



//mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about new blog',
//         body: 'more about my new blog'
//     });
//     blog.save().then((result) => {
//         res.send(result);
//     }).catch((error) => {
//         console.log(error);
//     });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         }).catch((err) => {
//             console.log(err);
//         });
// });
// app.get('/single-blogs', (req, res) => {
//     Blog.findById('603bfd2dad625213b4d43c10')
//         .then((result) => {
//             res.send(result);
//         }).catch((err) => {
//             console.log(err);
//         });
// });



//custom middle year
// app.use((req, res, next) => {
//     console.log('request made');
//     console.log('host:', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:', req.method);
//     next();
// });


// app.use((req, res, next) => {
//     console.log('next middleware');
//     next();
// });

app.get('/', (req, res) => {
    // const blogs = [
    //     { title: 'arif', snippet: 'lorem jipsum' },
    //     { title: 'bob', snippet: 'lorem jipsum' },
    //     { title: 'taylor', snippet: 'lorem jipsum' }
    // ];
    // // res.send('<p>Hello express app</p>');
    // res.render('index', { title: 'Home', blogs: blogs });
    res.redirect('/blogs');
});
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });

    // res.send('<p>Hello express app</p>');
});

//blog routes
app.use('/blogs', blogRoutes);



//redirects
// app.get('/about-me', (req, res) => {
//    res.redirect('/about');
// });

//404 pages

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});