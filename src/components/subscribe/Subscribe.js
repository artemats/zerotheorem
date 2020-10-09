import React from 'react';
import './subscribe.scss';

const Subscribe = () => {
    return (
        <section className="section subscribe">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form>
                            <div className="subscribe-box">
                                <p className="subtitle">Quant lab</p>
                                <p className="title-2">Subscribe to Our Blog</p>
                                <p>Stay up to date with the latest tips and news.</p>
                                <div className="subscribe-options">
                                    <label className="input-container input-container-check">
                                        <input type="radio" name="subscribe" className="input-check"/>
                                        <div className="input-check-icon" />
                                        <div className="input-check-title">Backtests</div>
                                    </label>
                                    <label className="input-container input-container-check">
                                        <input type="radio" name="subscribe" className="input-check"/>
                                        <div className="input-check-icon" />
                                        <div className="input-check-title">Academic articles</div>
                                    </label>
                                    <label className="input-container input-container-check">
                                        <input type="radio" name="subscribe" className="input-check"/>
                                        <div className="input-check-icon" />
                                        <div className="input-check-title">Research</div>
                                    </label>
                                    <label className="input-container input-container-check">
                                        <input type="radio" name="subscribe" className="input-check"/>
                                        <div className="input-check-icon" />
                                        <div className="input-check-title">Education</div>
                                    </label>
                                </div>
                                <div className="input-container input-container-row">
                                    <input type="text" className="input" placeholder="E-mail" />
                                    <button className="btn">
                                        <span className="btn-title">Send</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Subscribe;