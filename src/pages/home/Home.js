import React, { Fragment, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import AnimateCounter from "../../components/animate-counter/AnimateCounter";
import './home.scss';
import infoBanner from '../../assets/images/home/wtf-banner.jpg';
import aboutBanner from '../../assets/images/home/about-banner.jpg';
import forecastBanner from '../../assets/images/home/forecast-banner.jpg';
import quantBanner from '../../assets/images/home/quant-banner.jpg';
import wtfSun from '../../assets/images/wtf-planet.svg';
import aboutSun from '../../assets/images/about-planet.svg';
import ResearchBox from "../../components/research-box/ResearchBox";
import LoadingIndicator from "../../components/loadingIndicator/LoadingIndicator";
import Planets from "../../components/planets/Planets";
const HeroVideo = lazy(() => import("../../components/heroVideo/HeroVideo"));
import heroCircle from '../../assets/images/hero-circle.svg';
import HeroCharts from "../../components/heroChartsAnimate/HeroCharts";

const Home = () => {

    return(
        <Fragment>
            <section className="section folder">
                <Suspense fallback={<LoadingIndicator />}>
                    <HeroVideo />
                </Suspense>
                <img src={heroCircle} alt="" className="folder-circle" />
                <div className="abstract __1" />
                <div className="container">
                    <HeroCharts />
                    <div className="row">
                        <div className="col-12">
                            <div className="folder-title">
                                <h1 className="title-1 with-border">Forecast</h1>
                            </div>
                            <AnimateCounter value={1000} currency="$" />
                            <div className="folder-action">
                                <Link to="/quant-lab" className="btn">
                                    <span className="btn-title">Going to Quant Lab</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section content __wtf">
                <div className="abstract __2" />
                <Planets width={281} height={275} sun={wtfSun} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-md-6">
                            <div className="content-preview">
                                <img src={infoBanner} alt="Mission" />
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-md-6">
                            <div className="content-description">
                                <div className="content-description-title">
                                    <div className="title-plus" />
                                    <p className="subtitle">Information</p>
                                    <h2 className="title-2 title-border">Mission</h2>
                                </div>
                                <div className="content-description-text">
                                    <h3 className="title-3">1. Zero BIAS</h3>
                                    <p>Depart do be so he enough talent. Sociable formerly six but handsome. Up do view time they shot. He concluded disposing provision by questions as situation.</p>
                                    <h3 className="title-3">2. Zero Cost</h3>
                                    <p>Indness to he horrible reserved ye. Effect twenty indeed beyond for not had county. The use him without greatly can private. Increasing it unpleasant no of contrasted no continuing.</p>
                                    <h3 className="title-3">3. Zero Theorem</h3>
                                    <p>Possession her thoroughly remarkably terminated man continuing. Removed greater to do ability. You shy shall while but wrote marry. Call why sake has sing pure.</p>
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
                            <ResearchBox defaultTheme={false} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section content __right __about">
                <div className="abstract __4" />
                <Planets width={468} height={458} sun={aboutSun} />
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
            {/*<section className="section forecast">*/}
            {/*    <div className="abstract __5" />*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-xl-7 offset-xl-1 order-md-2 col-lg-7 col-md-6">*/}
            {/*                <div className="forecast-preview">*/}
            {/*                    <img src={forecastBanner} alt="Forecast" />*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="col-xl-3 offset-xl-1 order-md-1 col-lg-5 col-md-6">*/}
            {/*                <div className="forecast-content">*/}
            {/*                    <p className="title-1 with-border">Forecast</p>*/}
            {/*                    <AnimateCounter value={1000} currency="$" />*/}
            {/*                    <p>Depart do be so he enough talent. Sociable formerly six but handsome. Up do view time they shot. He concluded disposing provision</p>*/}
            {/*                    <Link to="/forecast" className="btn">*/}
            {/*                        <span className="btn-title">Go to forecast</span>*/}
            {/*                    </Link>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
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