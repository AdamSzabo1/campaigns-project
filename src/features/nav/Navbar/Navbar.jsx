import { Link } from "react-router";
import { getFirebaseApp } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Navbar = ({ userEmail }) => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to={'/'}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/campaigns/viewer'}>
                                Campaigns
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/campaigns/upload'}>
                                Upload
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="navbar-nav" >
                        <li className="nav-item" >
                            {
                                userEmail
                                ? <Link className="nav-link" to={'/auth/user-profile'}>
                                    {userEmail}
                                </Link>
                                : <Link className="nav-link" to={'/auth/login'}>
                                    Login
                                </Link>
                            }
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
