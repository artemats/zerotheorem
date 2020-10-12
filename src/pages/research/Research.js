import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import './research.scss';
import Post from "Components/post/Post";
import Subscribe from "Components/subscribe/Subscribe";
import ErrorBoundry from "Components/error-boundry/ErrorBoundry";
import ResearchPagination from "./pagination/ResearchPagination";
import ResearchThumbnail from "./thumbnail/ResearchThumbnail";
import ResearchFilter from "./filters/ResearchFilter";

const Research = ({ data, tags }) => {

    console.log(tags);
    const [limit, setLimit] = useState(9);
    const [offset, setOffset] = useState(9);
    const [posts, setPosts] = useState(data);
    const [limitedPosts, setLimitedPosts] = useState(posts.slice(0, offset));
    const thumbPost = posts[0];

    return(
        <Fragment>
            <section className="section hero inner-page">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="subtitle">Our</p>
                            <h1 className="title-1 __md">Resources</h1>
                        </div>
                    </div>
                    <ErrorBoundry>
                        <ResearchThumbnail thumb={thumbPost} />
                    </ErrorBoundry>
                    <ErrorBoundry>
                        <ResearchFilter />
                    </ErrorBoundry>
                    <div className="row">
                        <div className="col-12">
                            <div className="research-list research-list-default">
                                <ErrorBoundry>
                                    {
                                        limitedPosts.map((post, key) => {
                                            return(
                                                <div className="research-list-item" key={key}>
                                                    <Post post={post} />
                                                </div>
                                            )
                                        })
                                    }
                                </ErrorBoundry>
                            </div>
                            <ErrorBoundry>
                                <ResearchPagination />
                            </ErrorBoundry>
                        </div>
                    </div>
                </div>
            </section>
            <ErrorBoundry>
                <Subscribe />
            </ErrorBoundry>
        </Fragment>
    )

};

const mapStateToProps = ({ researchReducer }) => {
  return researchReducer;
};

export default connect(mapStateToProps)(Research);