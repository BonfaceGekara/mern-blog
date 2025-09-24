import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function CreateBlog() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [sub_title, setSub_title] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("Admin");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await API.post("/blogs", {
                title,
                sub_title,
                content,
                author,
            });
            navigate("/");
        } catch (err) {
            setError("Failed to create blog. Please try again later!");
        }
    };

    return (
        <div className="container mt-4">
            <h2>Create a New Blog</h2>
            {error && <p className="text-danger">{error}</p>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Sub Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={sub_title}
                        onChange={(e) => setSub_title(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea
                        className="form-control"
                        rows="5"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                    Create Blog
                </button>
            </form>
        </div>
    );
}

export default CreateBlog;