import React from 'react';
import './mission.scss';
import icon1 from "../../../assets/images/icons/Zero-BIAS.svg";
import icon2 from "../../../assets/images/icons/Zero-Cost.svg";
import icon3 from "../../../assets/images/icons/Zero-Theorem.svg";

const Mission = () => {

    return(
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
    )

};

export default Mission;