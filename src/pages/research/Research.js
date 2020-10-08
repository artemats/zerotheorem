import React, { useState } from 'react';
import { connect } from 'react-redux';
import star from 'Images/icons/star.svg';
import './research.scss';
import Post from "Components/post/Post";

const Research = ({ data }) => {

    const [limit, setLimit] = useState(9);
    const [offset, setOffset] = useState(9);
    const thumbPost = data[0];

    return(
        <section className="section hero inner-page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="subtitle">Our</p>
                        <h1 className="title-1 __md">Resources</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="research-banner" style={{ backgroundImage: `url(${thumbPost.banner})` }}>
                            <div className="research-banner-content">
                                <p className="research-banner-date">Aug 29 - 4 min read <img src={star} alt="An Empirical Study on Modeling and Prediction of Bitcoin Prices Using Bayesian Neural Networks (BNN) Based on Blockchain Information" className="research-banner-icon" /></p>
                                <h2 className="title-2 research-banner-title">An Empirical Study on Modeling and Prediction of Bitcoin Prices Using Bayesian Neural Networks (BNN) Based on Blockchain Information</h2>
                                <p className="research-banner-description">Ayodeji Awosika in Forge</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="research-tags">
                            <div className="tags">
                                <button className="tags-item">Literature review</button>
                                <button className="tags-item active">Performance reports</button>
                                <button className="tags-item">research</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="research-search">
                            <div className="search">
                                <form>
                                    <div className="input-container">
                                        <input type="text" className="input"  placeholder="Search" />
                                        <button className="search-btn" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="research-list research-list-default">
                            {
                                data.slice(0,offset).map((post, key) => {
                                    return(
                                        <div className="research-list-item" key={key}>
                                            <Post post={post} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="pagination">
                            <button className="btn __border">
                                <span className="btn-title">Back</span>
                            </button>
                            <div className="pagination-nums">
                                <button className="pagination-nums-item active">1</button>
                                <button className="pagination-nums-item">2</button>
                                <button className="pagination-nums-item">3</button>
                                <span className="pagination-nums-item collapsed">...</span>
                                <button className="pagination-nums-item">6</button>
                            </div>
                            <button className="btn __border">
                                <span className="btn-title">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

const mapStateToProps = ({ researchReducer }) => {
  return researchReducer;
};

export default connect(mapStateToProps)(Research);