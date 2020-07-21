import React from 'react';
import Mission from "../about/mission/Mission";
import './resources.scss';
import icon1 from '../../assets/images/icons/subscribers.png';
import icon2 from '../../assets/images/icons/lab.png';
import icon3 from '../../assets/images/icons/research.png';

const Resources = () => {

    return(
        <section className="section hero inner-page">
            <Mission />
            <div className="funding-model">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-title">
                                <p className="subtitle">Useful</p>
                                <h3 className="title-1 title-border">Our funding model</h3>
                                <p className="hero-title-description">“Our subscribers finance the research and development of future economic theory…”</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="funding-model-box">
                                <div className="model">
                                    <div className="model-area __1" />
                                    <div className="model-area __2" />
                                    <div className="model-area __3" />
                                    <div className="model-header">
                                        <div className="model-header-item __1">
                                            <p className="regular">Global Community</p>
                                        </div>
                                        <div className="model-header-item __2">
                                            <p className="regular">Zero Theorem</p>
                                        </div>
                                    </div>
                                    <div className="model-row">
                                        <div className="model-row-item">
                                            <div className="model-row-box">
                                                <p>$$$</p>
                                                <div className="model-arrow right" />
                                            </div>
                                        </div>
                                        <div className="model-row-item">
                                            <div className="model-row-box">
                                                <p>$</p>
                                                <div className="model-arrow right" />
                                            </div>
                                            <div className="model-row-box">
                                                <p>Infrastructure</p>
                                            </div>
                                            <div className="model-row-box">
                                                <p>Data & Models</p>
                                                <div className="model-arrow right" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="model-row">
                                        <div className="model-row-detail">
                                            <img src={icon1} alt="Subscribers" />
                                            <p className="regular">Subscribers</p>
                                        </div>
                                        <div className="model-row-box">
                                            <p>Advanced Forecasts</p>
                                            <div className="model-arrow model-arrow-left left" />
                                        </div>
                                        <div className="model-row-detail">
                                            <img src={icon2} alt="Quant Lab" />
                                            <p className="regular">Quant Lab</p>
                                        </div>
                                        <div className="model-row-box">
                                            <p>Satoshi Stack Enhancements</p>
                                            <div className="model-arrow model-arrow-left left" />
                                        </div>
                                        <div className="model-row-detail">
                                            <img src={icon3} alt="Research" />
                                            <p className="regular">Research</p>
                                        </div>
                                    </div>
                                    <div className="model-row">
                                        <div className="model-row-item">
                                            <div className="model-row-box">
                                                <p>Improve Baseline Valuation Model + Economic Research Pipeline</p>
                                                <div className="model-arrow model-arrow-left left" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Resources;