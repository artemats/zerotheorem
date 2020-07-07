import React from 'react';
import './about.scss';
import icon1 from '../../assets/images/about/1.png';
import icon2 from '../../assets/images/about/2.png';
import icon3 from '../../assets/images/about/3.png';

const About = () => {

    return(
        <section className="section hero inner-page">
            <div className="abstract-circle __1" />
            <div className="abstract-circle __2" />
            <div className="mission">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-title">
                                <p className="subtitle">0100100001000101010011000100110001001111</p>
                                <h1 className="title-1 title-border">Our mission</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mission-box" data-num="01">
                                <div className="mission-box-icon">
                                    <img src={icon1} alt="To search for Satoshi Nacomoto’s governing equations" />
                                </div>
                                <div className="mission-box-title">
                                    <h3 className="title-3">To search for Satoshi Nacomoto’s governing equations</h3>
                                </div>
                                <div className="mission-box-description">
                                    <p> A zero game equilibrium set of equations (what we call Zero Theorem) which determine the long term valuation dynamics of Bitcoin based on the decay of the industries its disrupts, technologies it replaces and currencies it substitutes.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mission-box" data-num="02">
                                <div className="mission-box-icon">
                                    <img src={icon2} alt="To use mashine lerning to determine Zero Theorem hypotesis" />
                                </div>
                                <div className="mission-box-title">
                                    <h3 className="title-3">To use mashine lerning to determine Zero Theorem hypotesis</h3>
                                </div>
                                <div className="mission-box-description">
                                    <p>With machine driven proofs, experimental hypothesis are developed directly from investigating the underling determinants of multi-stacked forecast structure consisting of the best academic models available in literature.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mission-box" data-num="03">
                                <div className="mission-box-icon">
                                    <img src={icon3} alt="To use mashine lerning to determine Zero Theorem hypotesis" />
                                </div>
                                <div className="mission-box-title">
                                    <h3 className="title-3">To provide a short term pricing bechmark for Bitcoin </h3>
                                </div>
                                <div className="mission-box-description">
                                    <p>Via our baseline forecast models or advanced aggregation stack in Quant Lab</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="model">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-title">
                                <p className="subtitle">useful</p>
                                <h1 className="title-1 title-border">OUR FUNDING MODEL</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default About;