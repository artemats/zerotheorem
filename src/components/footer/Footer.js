import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/zerOtheorem_logo.svg';
import './footer.scss';

const Footer = () => {

    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <Link to="/" className="footer-logo">
                            <img src={logo} alt="ZeroTheorem" />
                        </Link>
                    </div>
                    <div className="col-sm-8">
                        <div className="footer-nav">
                            <nav className="nav">
                                <NavLink to="/about" className="link">About</NavLink>
                                <NavLink to="/wtf" className="link ttu">Wtf...is zt?</NavLink>
                                <NavLink to="/faq" className="link">FAQ</NavLink>
                                <NavLink to="/resources" className="link">Resources</NavLink>
                                <NavLink to="/quant-lab" className="link">Quant Lab</NavLink>
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