import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const navigate = useNavigate();

    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.name);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <h1 className='mx-5'><Link className='navbar-brand' to={'/'}>MERN Blog</Link></h1>
                {/*toggler */}
                <button type='button'
                    className='navbar-toggler'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarlinks'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                {/*nav links*/}
                <div className='collapse navbar-collapse' id='navbarlinks'>
                    <ul className='navbar-nav ms-auto'>
                        {isLoggedIn ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/create">
                                        Create Post
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-outline-danger ms-2" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            </>
                        )
                        :
                        (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">
                                        Sign Up
                                    </Link>
                                </li>
                            </>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;