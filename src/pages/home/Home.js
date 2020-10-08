import React, { Fragment, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import AnimateCounter from "Components/animate-counter/AnimateCounter";
import './home.scss';
const ResearchBox = lazy(() => import("Components/research-box/ResearchBox"));
import philosophyIcon1 from 'Images/icons/replace.svg';
import philosophyIcon2 from 'Images/icons/orbit.svg';
import philosophyIcon3 from 'Images/icons/3d-modeling.svg';
import incentivesBanner from 'Images/home/incentives-banner.png';
import whyUsIcon1 from 'Images/home/why-us/1.png';
import whyUsIcon2 from 'Images/home/why-us/2.svg';
import whyUsIcon3 from 'Images/home/why-us/3.svg';
import whyUsIcon4 from 'Images/home/why-us/4.svg';
import faqBanner from 'Images/home/faq-banner.png';
import FaqAccordion from "../faq/FaqAccordion";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import LoadingIndicator from "Components/loadingIndicator/LoadingIndicator";
import investmentBannerPng from 'Images/abstract/chart-1.png';
import investmentBannerWebp from 'Images/abstract/chart-1.webp';

const Home = () => {

    return(
        <Fragment>
            <div className="pattern" />
            <section className="section folder">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 order-lg-2">
                            <div className="folder-counter">
                                <AnimateCounter value={1000} currency="$" />
                            </div>
                        </div>
                        <div className="col-lg-8 order-lg-1">
                            <div className="folder-content">
                                <p className="subtitle">Welcome</p>
                                <div className="folder-content-title">
                                    <h1 className="title-1">The Convergence of AI, Blockchain Technology And Quantitative Finance</h1>
                                </div>
                                <div className="folder-content-subtitle">
                                    <h6 className="title-6">Want to look at models to know the price dynamics?</h6>
                                </div>
                                <Link to="/quant-lab" className="btn">
                                    <span className="btn-title">Go to Forecast</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section philosophy">
                <div className="abstract abstract-1">
                    <picture>
                        <source srcSet={investmentBannerWebp} type="image/webp" />
                        <source srcSet={investmentBannerPng} type="image/png" />
                        <img src={investmentBannerPng} alt="Investment Philosophy" />
                    </picture>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="subtitle">More about</p>
                            <div className="philosophy-title">
                                <h2 className="title-2">Investment Philosophy</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="philosophy-list">
                                <div className="philosophy-box">
                                    <div className="philosophy-box-icon">
                                        <img src={philosophyIcon1} alt="Zero Substitution" />
                                    </div>
                                    <h5 className="title-5 philosophy-box-title">1. Zero Substitution</h5>
                                    <p className="philosophy-box-description">...”game theoretical principles that suggest BTC dominance to absorb value from weaker substitutes”</p>
                                </div>
                                <div className="philosophy-box">
                                    <div className="philosophy-box-icon">
                                        <img src={philosophyIcon2} alt="Zero Entropy" />
                                    </div>
                                    <h5 className="title-5 philosophy-box-title">2. Zero Entropy</h5>
                                    <p className="philosophy-box-description">…”trading Strategy focuses on risk minimization by targeting temporary price dislocations and extracting market inefficiencies”</p>
                                </div>
                                <div className="philosophy-box">
                                    <div className="philosophy-box-icon">
                                        <img src={philosophyIcon3} alt="Zero Interference" />
                                    </div>
                                    <h5 className="title-5 philosophy-box-title">3. Zero Interference</h5>
                                    <p className="philosophy-box-description">….“Trusting statistical methods and allowing autonomous trade execution without any human interference or intervention”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section incentives">
                <div className="abstract abstract-2" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="incentives-banner">
                                <img src={incentivesBanner} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="incentives-content">
                                <p className="subtitle">Our incentives</p>
                                <div className="incentives-content-title">
                                    <p className="title-2">Explore our Research and Performance Reports</p>
                                </div>
                                <div className="incentives-content-description">
                                    <p>What is behind Zero Theorem Quant Lab?</p>
                                </div>
                                <Link to="/" className="btn __border">
                                    <div className="btn-title">Check</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section approach">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <p className="subtitle">We will make clear</p>
                            <div className="approach-title">
                                <h3 className="title-2">Zero Theorem Scientific Approach</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="scheme-wrap">
                                <div className="scheme">
                                    <div className="scheme-column">
                                        <div className="scheme-box detail top">
                                            <div className="scheme-box-item __white semi-bold">
                                                <p>Data <br /> Collection</p>
                                            </div>
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue semi-bold">
                                                <p>BTC <br /> Market Indexes</p>
                                            </div>
                                            <div className="arrow right" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue semi-bold">
                                                <p>Global Market Instruments</p>
                                            </div>
                                            <div className="arrow right" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue semi-bold">
                                                <p>Blockchain <br /> Metrics</p>
                                            </div>
                                            <div className="arrow right" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue semi-bold">
                                                <p>Macro-Economic Indicators</p>
                                            </div>
                                            <div className="arrow right" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue semi-bold">
                                                <p>Alternative</p>
                                            </div>
                                            <div className="arrow right" />
                                        </div>
                                    </div>
                                    <div className="scheme-column">
                                        <div className="scheme-box detail top double">
                                            <div className="scheme-box-item __white semi-bold">
                                                <p>Academic Model<br /> Construction</p>
                                            </div>
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __orange semi-bold">
                                                <p>Data <br />
                                                    Curation
                                                    <br />
                                                    <br />
                                                    &
                                                    <br />
                                                    <br />
                                                    Feature <br />
                                                    Engineering
                                                </p>
                                            </div>
                                            <div className="arrow right" />
                                        </div>
                                    </div>
                                    <div className="scheme-column">
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __yellow semi-bold">
                                                <p>Multi-Model
                                                    <br />
                                                    <br />
                                                    Management
                                                    <br />
                                                    <br />
                                                    &
                                                    <br />
                                                    <br />
                                                    Optimization
                                                </p>
                                            </div>
                                            <div className="data right">
                                                <p>Train/Test/Optimise</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="scheme-column">
                                        <div className="scheme-box detail top">
                                            <div className="scheme-box-item __white semi-bold">
                                                <p>Theoretical <br /> Learning Cycle</p>
                                            </div>
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue semi-bold">
                                                <p>Baseline Model  1</p>
                                            </div>
                                            <div className="arrow right" />
                                            <div className="arrow left top" />
                                            <div className="arrow arrow-left left bottom" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue semi-bold">
                                                <p>Baseline Model  2</p>
                                            </div>
                                            <div className="arrow right" />
                                            <div className="arrow left top" />
                                            <div className="arrow arrow-left left bottom" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue semi-bold">
                                                <p>Baseline Model  3</p>
                                            </div>
                                            <div className="arrow right" />
                                            <div className="arrow left top" />
                                            <div className="arrow arrow-left left bottom" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue semi-bold">
                                                <p>Baseline Model  n</p>
                                            </div>
                                            <div className="arrow right" />
                                            <div className="arrow left top" />
                                            <div className="arrow arrow-left left bottom" />
                                        </div>
                                    </div>
                                    <div className="scheme-column">
                                        <div className="scheme-box detail top double">
                                            <div className="scheme-box-item __white semi-bold">
                                                <p>Practical <br /> Learning Cycle</p>
                                            </div>
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __orange regular">
                                                <p>Zero <br />
                                                    Theorem
                                                    <br />
                                                    <br />
                                                    [AI]
                                                </p>
                                            </div>
                                            <div className="data left">
                                                <p>Forecasts</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="scheme-column">
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue semi-bold">
                                                <p>TRADE DECISION <br />
                                                    Directional (up/down)</p>
                                            </div>
                                            <div className="arrow left" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="arrow arrow-center arrow-bottom" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue semi-bold">
                                                <p>ENVIRONMENT<br />
                                                    BTC Exchange</p>
                                            </div>
                                        </div>
                                        <div className="scheme-box">
                                            <div className="arrow arrow-center arrow-bottom" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue semi-bold">
                                                <p>STATE & REWARD<br />
                                                    Performance</p>
                                            </div>
                                            <div className="arrow arrow-left left" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section why">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="subtitle">We will make clear</p>
                            <div className="why-title">
                                <h3 className="title-2">So, Why Us</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="why-list">
                                <div className="why-list-box">
                                    <div className="why-item">
                                        <div className="why-item-icon">
                                            <img src={whyUsIcon1} alt="Stochastic properties" />
                                        </div>
                                        <div className="why-item-content">
                                            <h4 className="title-4">Stochastic properties</h4>
                                            <p>Even though we use a combination of statistical, econometric and machine learning methods to estimate value, we will never overlook the stochastic properties of reality for the pristine beauty of mathematical formulation.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-list-box">
                                    <div className="why-item">
                                        <div className="why-item-icon">
                                            <img src={whyUsIcon2} alt="We understand" />
                                        </div>
                                        <div className="why-item-content">
                                            <h4 className="title-4">We understand</h4>
                                            <p>We understand that our models can provoke past, current and future economic theory and accept that our work may result in consequences on society that can be far beyond our own comprehension.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-list-box">
                                    <div className="why-item">
                                        <div className="why-item-icon">
                                            <img src={whyUsIcon3} alt="We will make clear " />
                                        </div>
                                        <div className="why-item-content">
                                            <h4 className="title-4">We will make clear </h4>
                                            <p>We will make clear the assumptions, oversights and accuracy of our models to those who intent to use them and never claim that th ey have the full explanatory insights into real world market dynamics. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-list-box">
                                    <div className="why-item">
                                        <div className="why-item-icon">
                                            <img src={whyUsIcon4} alt="We commit" />
                                        </div>
                                        <div className="why-item-content">
                                            <h4 className="title-4">We commit</h4>
                                            <p>We will make clear the assumptions, oversights and accuracy of our models to those who intent to use them and never claim that th ey have the full explanatory insights into real world market dynamics.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="why-list-box">
                                    <div className="why-item">
                                        <div className="why-item-icon">
                                            <img src={whyUsIcon4} alt="We commit" />
                                        </div>
                                        <div className="why-item-content">
                                            <h4 className="title-4">We will make clear</h4>
                                            <p>We commit to continuously improving and evolving our models and will never claim that they arecomplete. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section research">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="research-title">
                                <p className="subtitle">This is us</p>
                                <h3 className="title-2">Research</h3>
                                <Link to="/research" className="btn __border">
                                    <div className="btn-title">Find Out More</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <ResearchBox />
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section faq">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="faq-title">
                                <p className="title-2">Frequently Asked Questions</p>
                            </div>
                            <div className="faq-banner">
                                <img src={faqBanner} alt="Frequently Asked Questions" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <FaqAccordion />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section lab">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="lab-box">
                                <p className="subtitle">Quant lab</p>
                                <h2 className="title-2">How for down the rabbit hole are you willing to go?</h2>
                                <Link to="/quant-lab" className="btn">
                                    <span className="btn-title">Go to Forecast</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )

};

export default Home;