import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/zerOtheorem_logo.png';
import './header.scss';

const Header = () => {

    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Link to="/" className="header-logo">
                            <img src={logo} alt="ZeroTheorem" />
                        </Link>
                    </div>
                    <div className="col-lg-9">
                        <div className="header-nav">
                            <nav className="nav">
                                <Link to="/about" className="link">About</Link>
                                <Link to="/wtf" className="link ttu">Wtf...is zt?</Link>
                                <Link to="/resources" className="link">Resources</Link>
                                <Link to="/forecast" className="link">Forecast</Link>
                                <a href="#" className="link icon-after">
                                    Login
                                    <span className="link-icon login"></span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

};

export default Header;