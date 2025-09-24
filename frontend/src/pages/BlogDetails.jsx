import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import API from "../api";

function BlogDetails() {

    const navigate = useNavigate();

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
            <div className="my-4">
                <button className="btn btn-secondary" onClick={() => navigate("/")}>
                    ← Back to Home
                </button>
            </div>
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