import React from 'react';
import './back-test.scss';

const BackTest = () => {

    return(
        <section className="section hero inner-page">
            <div className="abstract __15" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="hero-title">
                            <p className="subtitle">Resources</p>
                            <h1 className="title-2 title-border">Back test</h1>
                        </div>
                    </div>
                </div>
                <div className="back">
                    <div className="abstract-circle __1" />
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="back-box">
                                <p className="back-box-title regular">Baseline Model 1 – VECM</p>
                                <p className="back-box-subtitle">Ciaian et al. (2016)</p>
                                <button className="btn lg">
                                    <span className="btn-title">Read More</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-4">
                            <div className="back-box">
                                <p className="back-box-title regular">Baseline Model 2 – SVM</p>
                                <p className="back-box-subtitle">Ciaian et al. (2016)</p>
                                <button className="btn lg">
                                    <span className="btn-title">Read More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="back-box __base">
                                <div className="back-arrow left top" />
                                <div className="back-arrow left bottom" />
                                <div className="back-arrow right top" />
                                <div className="back-arrow right bottom" />
                                <p className="back-box-title regular">Satoshi Stack 1</p>
                                <button className="btn lg">
                                    <span className="btn-title">Read More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="back-box">
                                <p className="back-box-title regular">Baseline Model 3 – CART</p>
                                <p className="back-box-subtitle">Huang et al. (2019)</p>
                                <button className="btn lg">
                                    <span className="btn-title">Read More</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-4">
                            <div className="back-box">
                                <p className="back-box-title regular">Baseline Model 4 – ENT</p>
                                <p className="back-box-subtitle">Pele and Mazurencu-Marinescu-Pele (2019)</p>
                                <button className="btn lg">
                                    <span className="btn-title">Read More</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default BackTest;