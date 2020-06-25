import React, { Fragment, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import AnimateCounter from "../../components/animate-counter/AnimateCounter";
import './home.scss';
import wtfBanner from '../../assets/images/home/wtf-banner.jpg';
import aboutBanner from '../../assets/images/home/about-banner.jpg';
import forecastBanner from '../../assets/images/home/forecast-banner.jpg';
import quantBanner from '../../assets/images/home/quant-banner.jpg';
const Research = lazy(() => import ("../../components/research/Research"));

const renderLoader = () => <p>Loading</p>;

const Home = () => {

    return(
        <Suspense fallback={renderLoader()}>
            <section className="section folder">
                <div className="abstract __1" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="folder-title">
                                <h1 className="title-1 with-border">Quant lab</h1>
                            </div>
                            <AnimateCounter value={1000} currency="$" />
                            <div className="folder-action">
                                <a href="#" className="btn">
                                    <span className="btn-title">Login to Quant Lab</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section content">
                <div className="abstract __2" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <div className="content-preview">
                                <img src={wtfBanner} alt="WTF...IS ZT?" />
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-md-6">
                            <div className="content-description">
                                <div className="content-description-title">
                                    <div className="title-plus" />
                                    <p className="subtitle">Information</p>
                                    <h2 className="title-2 title-border">WTF...IS ZT?</h2>
                                </div>
                                <div className="content-description-text">
                                    <p>Depart do be so he enough talent. Sociable formerly six but handsome. Up do view time they shot. He concluded disposing provision by questions as situation.</p>
                                    <p>indness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing. Nothing colonel my no removed in weather. It dissimilar in up devonshire inhabiting.</p>
                                </div>
                                <div className="content-description-action">
                                    <Link to="/wtf" className="btn lg">
                                        <div className="btn-title">Show More</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Research />
            <section className="section content __right">
                <div className="abstract __4" />
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
                                    <Link to="/about" className="btn lg">
                                        <div className="btn-title">Show More</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section forecast">
                <div className="abstract __5" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 offset-xl-1 order-md-2 col-lg-7 col-md-6">
                            <div className="forecast-preview">
                                <img src={forecastBanner} alt="Forecast" />
                            </div>
                        </div>
                        <div className="col-xl-3 offset-xl-1 order-md-1 col-lg-5 col-md-6">
                            <div className="forecast-content">
                                <p className="title-1 with-border">Forecast</p>
                                <AnimateCounter value={1000} currency="$" />
                                <p>Depart do be so he enough talent. Sociable formerly six but handsome. Up do view time they shot. He concluded disposing provision</p>
                                <Link to="/forecast" className="btn">
                                    <span className="btn-title">Go to forecast</span>
                                </Link>
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
                                    <Link to="/forecast" className="btn">
                                        <span className="btn-title">Go to forecast</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Suspense>
    )

};

export default Home;