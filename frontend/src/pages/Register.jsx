import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await API.post("/auth/register", { email, password });
            navigate("/login");
        } catch (err) {
            if (err.response && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("Registration failed. Try again.");
            }
        }
    };

    return (
        <div className="container mt-4">
            <h2>Sign Up</h2>
            {error && <p className="text-danger">{error}</p>}

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Register;