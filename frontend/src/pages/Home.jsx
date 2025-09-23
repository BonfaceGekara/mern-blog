import { useState, useEffect } from 'react';
import API from '../api.js';

function Home() {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await API.get('/blogs');
                setBlogs(res.data);
            } catch (error) {
                console.log(error);
                setError('Failed to fetch blogs');
            } finally {
                setLoading(false);
            }
        }

        fetchBlogs();
    }, []);

    if (loading) return <p className="text-center mt-3">Loading blogs...</p>;
    if (error) return <p className="text-center text-danger mt-3">{error}</p>;

    return (
        <div className="container my-4">
            <h2 className="mb-4">Latest Blogs</h2>
            {blogs.length === 0 ? (
                <p>No blogs available.</p>
            ) : (
                <div className="list-group">
                    {blogs.map((blog) => (
                        <a
                            key={blog._id}
                            href={`/blogs/${blog._id}`}
                            className="list-group-item list-group-item-action"
                        >
                            <h4 className="mb-1">{blog.title}</h4>
                            <h6 className="text-muted">{blog.sub_title}</h6>
                            <p className="mb-1">{blog.content.substring(0, 100)}...</p>
                            <small>By {blog.author}</small>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;