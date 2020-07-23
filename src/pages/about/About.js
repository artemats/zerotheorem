import React from 'react';
import './about.scss';
import Mission from "./mission/Mission";
import Manifesto from "./manifesto/Manifesto";

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
            <Mission />
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
            <Manifesto />
        </section>
    )

};

export default About;