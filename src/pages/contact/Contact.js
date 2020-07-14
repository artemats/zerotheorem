import React from 'react';
import './contact.scss';
import Feedback from "./feedback/Feedback";

const Contact = () => {

    return (
        <section className="section hero inner-page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hero-title">
                            <p className="subtitle">Resources</p>
                            <h1 className="title-1 title-border">Contact</h1>
                        </div>
                    </div>
                </div>
                <Feedback />
            </div>
            <div className="involved">
                <div className="abstract __9" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-title">
                                <p className="subtitle">Resources</p>
                                <h1 className="title-1 title-border">Involved</h1>
                            </div>
                            <h3 className="title-3">Want get involded? Become a contributor!</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-6">
                            <div className="involved-description">
                                <p>if you have a background in data science, mathematics, economics, engineering, quantitative finance, and your interested in contributing your time and Intellectual capacity towards the ongoing ZT research please contact us</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="involved-description">
                                <p>Our research encompassing +200 countries worth of macro-economic indicators, +100 traditional financial instruments, +50 block-chain metrics and a range of alternative data.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="involved-description">
                                <p>We can provide either a subset problem of ZT hypothesis to model, Or if you believe you can outperform our baseline valuation model, we can provide a train/test data set for you to explore.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6">
                            <div className="involved-description">
                                <p>Those who make contributions on ZT will have their research Published under their name. Those who can outperform out baselineValuation get to have their models published in their name.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Contact;