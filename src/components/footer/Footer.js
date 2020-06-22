import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/zerOtheorem_logo.png';
import './footer.scss';

const Footer = () => {

    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <Link to="/" className="footer-logo">
                            <img src={logo} alt="ZeroTheorem" />
                        </Link>
                    </div>
                    <div className="col-lg-8">
                        <div className="footer-nav">
                            <nav className="nav">
                                <Link to="/about" className="link">About</Link>
                                <Link to="/wtf" className="link ttu">Wtf...is zt?</Link>
                                <Link to="/resources" className="link">Resources</Link>
                                <Link to="/forecast" className="link">Forecast</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p className="copyright">All rights reserved. Made by <a href="http://studiopresto.com/" target="_blank">Presto</a> &copy;2020</p>
            </div>
        </footer>
    )

};

export default Footer;