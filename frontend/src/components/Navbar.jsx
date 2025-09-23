import { Link } from 'react-router-dom';

function Navbar() {
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/create">
                                Create Post
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-danger ms-2">
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;