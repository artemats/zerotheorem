import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/zerOtheorem_logo.svg';
import QuantNav from "../../pages/quant-lab/quant-nav/QuantNav";
import './header.scss';

const Header = () => {

    const [isOpenNav, setIsOpenNav] = useState(false);
    const [isInnerPage, setIsInnerPage] = useState(false);
    const [isCollapsedSub, setIsCollapsedSub] = useState(true);

    const history = useHistory();

    const onToggleNav = () => {
        setIsOpenNav(!isOpenNav);
    };

    const detectHeaderTheme = () => {
        const pathName = history.location.pathname.split('/');
        pathName[1] !== 'quant-lab' ? setIsInnerPage(false) : setIsInnerPage(true);
    };

    useEffect(() => {
        history.listen(() => {
            setIsOpenNav(false);
            detectHeaderTheme();
        });

        detectHeaderTheme(history.location.pathname);

        window.addEventListener('scroll', () => setIsOpenNav(false));
    },[history]);

    return(
        <header className={`header ${isInnerPage ? 'inner-theme' : ''}`}>
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
                                <ul className="nav-ul">
                                    <li>
                                        <NavLink to="/about" className="link">About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/faq" className="link ttu">FAQ</NavLink>
                                    </li>
                                    <li className={`has-sub ${isCollapsedSub ? '' : 'is-active'}`}>
                                        <span className="has-sub-btn" onClick={() => setIsCollapsedSub(!isCollapsedSub)} />
                                        <NavLink to="/resources" className="link">Resources</NavLink>
                                        <ul className="nav-ul-sub">
                                            <li>
                                                <NavLink to="/research" className="link">Research</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/contact" className="link">Contact</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/back-test" className="link">Back Test</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to="/quant-lab" className="link">Quant Lab</NavLink>
                                        <QuantNav url="/quant-lab" />
                                    </li>
                                </ul>
                                {/*<a href="#" className="link icon-after">*/}
                                {/*    Login*/}
                                {/*    <span className="link-icon login" />*/}
                                {/*</a>*/}
                            </nav>
                            <div className="header-nav-mobile">
                                {/*<a href="#" className="link icon-after">*/}
                                {/*    Login*/}
                                {/*    <span className="link-icon login" />*/}
                                {/*</a>*/}
                                <div className={`burger ${isOpenNav ? 'is-active' : ''}`} onClick={onToggleNav}>
                                    <div className="burger-box">
                                        <div className="burger-box-arrow" />
                                        <div className="burger-box-arrow" />
                                        <div className="burger-box-arrow" />
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

export default Header;