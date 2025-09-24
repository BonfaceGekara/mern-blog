import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await API.get(`/blogs/${id}`);
                setBlog(res.data);
            } catch (err) {
                setError("Blog not found!");
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    if (loading) return <p className="text-center mt-3">Loading blog...</p>;
    if (error) return <p className="text-center text-danger mt-3">{error}</p>;

    return (
        <div className="container mt-4">
            <h2>{blog.title}</h2>
            <h5 className="text-muted">{blog.sub_title}</h5>
            <p className="mt-3">{blog.content}</p>
            <p className="text-end">
                <small>Written by {blog.author}</small>
            </p>
        </div>
    );
}

export default BlogDetails;