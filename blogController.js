//blog_index, blog_details,blog_create_get,blog_create_post,blog_delete

const Blog = require('../models/blogs');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            // console.log(result);
            res.render('blogs/index', { title: 'All Blogs', blogs: result });
        }).catch((err) => {
            console.log(err);
        });
};

const blog_details = (req, res) => {
    Blog.findById(req.params.id)
        .then((result) => {
            console.log(result);
            res.render('details', { title: 'Blog Details', blog: result });
        }).catch((err) => {
            res.render('../views/404.ejs', { title: 'Blog not found' });
        });
};

const blog_create_get = (req, res) => {
    res.render('create', { title: 'Create a new page' });
};

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save().then((result) => {
        res.redirect('/blogs');
    }).catch((error) => {
        console.log(error);
    });
};
const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then((result) => {
        res.json({ redirect: '/blogs' });
    });
};

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
};

