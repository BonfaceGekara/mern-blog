const express = require('express');
const {postBlog, getBlogs, getBlogById, deleteBlog, updateBlog} = require('../controllers/blogControllers');

const router = express.Router();

router.get('/',getBlogs);
router.get('/:id',getBlogById);
router.post('/',postBlog);
router.put('/:id',updateBlog);
router.delete('/:id',deleteBlog);

module.exports = router;