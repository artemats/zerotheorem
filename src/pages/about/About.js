import React from 'react';
import './about.scss';
import icon1 from '../../assets/images/about/1.png';
import icon2 from '../../assets/images/about/2.png';
import icon3 from '../../assets/images/about/3.png';

const About = () => {

    return(
        <section className="section hero inner-page">
            <div className="motivation">
                <div className="abstract __10" />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="hero-title">
                                <p className="subtitle">our incentives</p>
                                <h1 className="title-1 title-border">Motivation</h1>
                            </div>
                            <div className="hero-quote">
                                <p>“We believe that the pricing uncertainty is the primary cause of Bitcoin’s market inefficiency, higher volatility and adoption drag ...for its destined global dominance...”</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="motivation-description">
                                <p>In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much. </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="motivation-description">
                                <p>Behind sooner dining so window excuse he summer. Breakfast met certainty and fulfilled propriety led. Waited get either are wooded little her. Contrasted unreserved as mr particular collecting it everything as indulgence. Seems ask meant merry could put. Age old begin had boy noisy table front whole given.</p>
                                <p>Sufficient unpleasing an insensible motionless if introduced ye. Now give nor both come near many late.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="motivation-description">
                                <p>Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mission">
                <div className="abstract-circle __1" />
                <div className="abstract-circle __2" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-title">
                                <p className="subtitle">0100100001000101010011000100110001001111</p>
                                <h3 className="title-1 title-border">Our mission</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="mission-box" data-num="01">
                                <div className="mission-box-icon">
                                    <img src={icon1} alt="Zero BIAS" />
                                </div>
                                <div className="mission-box-title">
                                    <h3 className="title-3">Zero BIAS</h3>
                                </div>
                                <div className="mission-box-description">
                                    <ul>
                                        <li>We review of all academic bitcoin pricing models.</li>
                                        <li>A replication of data features, model selection and calibration with independent back testing analysis.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mission-box" data-num="02">
                                <div className="mission-box-icon">
                                    <img src={icon2} alt="Zero Cost" />
                                </div>
                                <div className="mission-box-title">
                                    <h3 className="title-3">Zero Cost</h3>
                                </div>
                                <div className="mission-box-description">
                                    <ul>
                                        <li>We provide a free bitcoin pricing benchmark.</li>
                                    </ul>
                                    <p>In Quantlab both baseline and meta-model forecasts, model statistics, market metrics, and a range of alternative insights are presented for the community.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="mission-box" data-num="03">
                                <div className="mission-box-icon">
                                    <img src={icon3} alt="Zero Theorem" />
                                </div>
                                <div className="mission-box-title">
                                    <h3 className="title-3">Zero Theorem</h3>
                                </div>
                                <div className="mission-box-description">
                                    <p>Via our baseline forecast models or advanced aggregation stack in Quant Lab</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="infrastructure">
                <div className="abstract-circle __1" />
                <div className="abstract-circle __4" />
                <div className="abstract __11" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-title">
                                <p className="subtitle">WTF...IS ZT?</p>
                                <h3 className="title-1 title-border">ZT Infrastructure</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="scheme-wrap">
                                <div className="scheme">
                                    <div className="scheme-column">
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue regular">
                                                <p>BTC <br /> Market Indexes</p>
                                            </div>
                                            <div className="arrow right" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue regular">
                                                <p>Global Market Instruments</p>
                                            </div>
                                            <div className="arrow right" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue regular">
                                                <p>Blockchain <br /> Metrics</p>
                                            </div>
                                            <div className="arrow right" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue regular">
                                                <p>Macro-Economic Indicators</p>
                                            </div>
                                            <div className="arrow right" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __blue regular">
                                                <p>Alternative</p>
                                            </div>
                                            <div className="arrow right" />
                                        </div>
                                    </div>
                                    <div className="scheme-column">
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __orange regular">
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
                                            <div className="scheme-box-item __yellow regular">
                                                <p>Multi-Model<br />
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
                                                <p>Train/Test <br /> /OPtimise</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="scheme-column">
                                        <div className="scheme-box detail top">
                                            <div className="direction top right" />
                                            <div className="direction right down" />
                                            <div className="scheme-box-item __white regular">
                                                <p><strong>Meta Model Learning</strong><br />
                                                    Train/Test/Optimise</p>
                                            </div>
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __white regular">
                                                <p>Baseline Model  1</p>
                                            </div>
                                            <div className="arrow right top" />
                                            <div className="arrow left top" />
                                            <div className="arrow arrow-left left bottom" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __white regular">
                                                <p>Baseline Model  2</p>
                                            </div>
                                            <div className="arrow right top" />
                                            <div className="arrow left top" />
                                            <div className="arrow arrow-left left bottom" />
                                        </div>
                                        <div className="scheme-box" />
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __white regular">
                                                <p>Baseline Model  3</p>
                                            </div>
                                            <div className="arrow right bottom" />
                                            <div className="arrow left top" />
                                            <div className="arrow arrow-left left bottom" />
                                        </div>
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __white regular">
                                                <p>Baseline Model  n</p>
                                            </div>
                                            <div className="arrow right bottom" />
                                            <div className="arrow left top" />
                                            <div className="arrow arrow-left left bottom" />
                                        </div>
                                        <div className="scheme-box detail bottom">
                                            <div className="direction left top" />
                                            <div className="direction bottom left" />
                                            <div className="scheme-box-item __white regular">
                                                <p><strong>Meta Model Evaluation</strong><br />
                                                    Baseline Ranking Scores & Performance Metrics</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="scheme-column">
                                        <div className="scheme-box">
                                            <div className="scheme-box-item __orange regular">
                                                <p>Zero <br />
                                                    Theorem
                                                    <br />
                                                    <br />
                                                    [Reinforcement<br />
                                                    Learner]
                                                </p>
                                            </div>
                                            <div className="arrow right" />
                                            <div className="data left">
                                                <p>Forecast</p>
                                            </div>
                                            <div className="data right space">
                                                <p>
                                                    <span>Aggregated</span>
                                                    <span>Forecast</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="manifesto">
                <div className="abstract __12" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="hero-title">
                                <p className="subtitle">We will make clear</p>
                                <h3 className="title-1 title-border">OUR manifesto</h3>
                            </div>
                            <div className="hero-title-description __quote">
                                <p className="quote-title">
                                    “…Inspired by the Modelers’ Hippocratic Oath”
                                    <span className="quote-author">By Dr. Emanuel Derman and Dr. Paul Wilmott</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="manifesto-list">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-3">
                                <div className="manifesto-list-item">
                                    <div className="manifesto-box" data-num="01">
                                        <div className="manifesto-box-title">
                                            <h3 className="title-3">Stochastic properties</h3>
                                        </div>
                                        <div className="manifesto-box-description">
                                            <p>Even though we use a combination of statistical, econometric and machine learning methods to estimate value, we will never overlook the stochastic properties of reality for the pristine beauty of mathematical formulation</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 offset-lg-3">
                                <div className="manifesto-list-item">
                                    <div className="manifesto-box" data-num="02">
                                        <div className="manifesto-box-title">
                                            <h3 className="title-3">We will make clear</h3>
                                        </div>
                                        <div className="manifesto-box-description">
                                            <p>We will make clear the assumptions, oversights and accuracy of our models to those who intent to use them and never claim that th ey have the full explanatory insights into real world market dynamics.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 offset-lg-3">
                                <div className="manifesto-list-item">
                                    <div className="manifesto-box" data-num="03">
                                        <div className="manifesto-box-title">
                                            <h3 className="title-3">We understand</h3>
                                        </div>
                                        <div className="manifesto-box-description">
                                            <p>We understand that our models can provoke past, current and future economic theory and accept that our work may result in consequences on society that can be far beyond our own comprehension.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 offset-lg-3">
                                <div className="manifesto-list-item">
                                    <div className="manifesto-box" data-num="04">
                                        <div className="manifesto-box-title">
                                            <h3 className="title-3">We commit</h3>
                                        </div>
                                        <div className="manifesto-box-description">
                                            <p>We commit to continuously improving and evolving our models and will never claim that they are complete.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 offset-lg-3">
                                <div className="manifesto-list-item">
                                    <div className="manifesto-box" data-num="05">
                                        <div className="manifesto-box-title">
                                            <h3 className="title-3">We dedicate</h3>
                                        </div>
                                        <div className="manifesto-box-description">
                                            <p>We dedicate ourselves to expanding the current body of knowledge by providing our own academic research and releasing this information to the public at no cost.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 offset-lg-3">
                                <div className="manifesto-list-item">
                                    <div className="manifesto-box" data-num="06">
                                        <div className="manifesto-box-title">
                                            <h3 className="title-3">We express</h3>
                                        </div>
                                        <div className="manifesto-box-description">
                                            <p>We express specifically that our models or their outputs are not intended to be used as financial advice</p>
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

export default About;