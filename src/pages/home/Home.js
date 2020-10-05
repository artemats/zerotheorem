import React, { Fragment, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import AnimateCounter from "../../components/animate-counter/AnimateCounter";
import './home.scss';
import aboutBanner from '../../assets/images/home/about-banner.jpg';
import quantBanner from '../../assets/images/home/quant-banner.jpg';
import LoadingIndicator from "../../components/loadingIndicator/LoadingIndicator";
const ResearchBox = lazy(() => import("../../components/research-box/ResearchBox"));
import ErrorBoundry from "../../components/error-boundry/ErrorBoundry";
import philosophyIcon1 from '../../assets/images/icons/replace.svg';
import philosophyIcon2 from '../../assets/images/icons/orbit.svg';
import philosophyIcon3 from '../../assets/images/icons/3d-modeling.svg';

const Home = () => {

    return(
        <Fragment>
            <section className="section folder">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
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
                        <div className="col-xl-4">
                            <div className="folder-counter">
                                <AnimateCounter value={1000} currency="$" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section philosophy">
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
            <section className="section research">
                <div className="abstract __3" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="research-title">
                                <div className="title-plus" />
                                <p className="subtitle">useful</p>
                                <h2 className="title-2 title-border">Research</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ErrorBoundry>
                                <Suspense fallback={<LoadingIndicator />}>
                                    <ResearchBox defaultTheme={false} />
                                </Suspense>
                            </ErrorBoundry>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section content __right __about">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-1 order-md-2 col-md-6">
                            <div className="content-preview">
                                <img src={aboutBanner} alt="Back testing" />
                            </div>
                        </div>
                        <div className="col-xl-5 order-md-1 col-md-6">
                            <div className="content-description">
                                <div className="content-description-title">
                                    <p className="subtitle">About</p>
                                    <h2 className="title-2 title-border">Back testing</h2>
                                </div>
                                <div className="content-description-text">
                                    <p>Depart do be so he enough talent. Sociable formerly six but handsome. Up do view time they shot. He concluded disposing provision by questions as situation.</p>
                                    <p>indness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.</p>
                                </div>
                                <div className="content-description-action">
                                    <Link to="/back-test" className="btn lg">
                                        <div className="btn-title">Show More</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section quant">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 offset-xl-1 col-md-6">
                            <div className="quant-preview">
                                <img src={quantBanner} alt="Quant Lab" />
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-md-6">
                            <div className="quant-description">
                                <div className="quant-description-title">
                                    <h2 className="title-2 title-border">Quant Lab</h2>
                                </div>
                                <div className="quant-description-text">
                                    <p>Depart do be so he enough talent. Sociable formerly six but handsome. Up do view time they shot. He concluded disposing provision by questions as situation.</p>
                                    <p>indness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing.</p>
                                </div>
                                <div className="quant-description-action">
                                    <Link to="/quant-lab" className="btn">
                                        <span className="btn-title">Go to Quant Lab</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )

};

export default Home;