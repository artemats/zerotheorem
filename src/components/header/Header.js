import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/zerOtheorem_logo.svg';
import './header.scss';

const Header = ({ history }) => {

    const [isOpenNav, setIsOpenNav] = useState(false);

    history.listen(() => setIsOpenNav(false));

    const onToggleNav = () => {
        setIsOpenNav(!isOpenNav);
    };

    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <Link to="/" className="header-logo">
                            <img src={logo} alt="ZeroTheorem" />
                        </Link>
                    </div>
                    <div className="col-lg-9 col-6">
                        <div className="header-nav">
                            <nav className={`nav ${isOpenNav ? 'is-active' : ''}`}>
                                <NavLink to="/about" activeClassName="active" className="link">About</NavLink>
                                <NavLink to="/wtf" activeClassName="active" className="link ttu">Wtf...is zt?</NavLink>
                                <NavLink to="/resources" activeClassName="active" className="link">Resources</NavLink>
                                <NavLink to="/forecast" activeClassName="active" className="link">Forecast</NavLink>
                                <a href="#" className="link icon-after">
                                    Login
                                    <span className="link-icon login"></span>
                                </a>
                            </nav>
                            <div className="header-nav-mobile">
                                <a href="#" className="link icon-after">
                                    Login
                                    <span className="link-icon login"></span>
                                </a>
                                <div className={`burger ${isOpenNav ? 'is-active' : ''}`} onClick={onToggleNav}>
                                    <div className="burger-box">
                                        <div className="burger-box-arrow"></div>
                                        <div className="burger-box-arrow"></div>
                                        <div className="burger-box-arrow"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

};

export default withRouter(Header);