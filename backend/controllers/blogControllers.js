const Blog = require('../models/Blog');

const getBlogs = async(req,res) => {

    try {
        const result = await Blog.find();
        res.json(result);
    } catch(err) {
        console.console.error();
        ("Error in getting all blogs",err);
        return res.status(400).json({message : "Blogs not fetched!"});
    }
}

const getBlogById = async(req,res) => {
    try {
        const id = req.params.id;
        const result = await Blog.findById(id);

        if(result.length === 0) {
            return res.status(404).json({message : 'No Blog found!'});
        }

        res.json(result);
    } catch(err) {
        console.error('Failed to get the Blog',err);
        res.status(400).json({message : 'Blog not found!'});
    }
}

const postBlog = async(req,res) => {

    const {title,sub_title,content,author} = req.body;

    try {
        const newBlog = new Blog({title,sub_title,content,author});
        const result = await newBlog.save();
        res.json({
            message : "Blog posted successfully"
        })
    } catch(err) {
        console.log("Error in adding a blog",err);
        return res.status(400).json({message : "Blog not posted!"});
    }
}

const updateBlog = async(req,res) => {
    try {
        const id = req.params.id;
        const {title,sub_title,content,author} = req.body;
        await Blog.findByIdAndUpdate(id,{title,sub_title,content,author},{new: true, runValidators: true});
    } catch(err) {
        console.error('Failed to update the Blog!',err);
        return res.status(404).json({message : 'Failed to edit the Blog!'});
    }
    res.json({message : 'Blog editted successfully'});
}

const deleteBlog = async (req,res) => {
    try {
        const id = req.params.id;
        await Blog.findByIdAndDelete(id);
        res.json({message : 'Blog deleted successfully'});
    } catch(err) {
        console.error('Failed to delete the blog',err);
        res.status(404).json({message: 'Blog not deleted!'});
    }
}

module.exports = {postBlog, getBlogs, getBlogById, deleteBlog, updateBlog};