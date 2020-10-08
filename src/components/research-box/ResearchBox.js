import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './research-box.scss';
import Post from "../post/Post";
import PostDefault from "../post-default/PostDefault";

const ResearchBox = ({ data }) => {

    // if(defaultTheme) {
    //
    //     return (
    //         <div className="research-list __default">
    //             <div className="row">
    //                 {
    //                     data.map((post, key) => {
    //                         return (
    //                             <div className="col-xl-4 col-lg-6 col-md-6" key={key}>
    //                                 <div className="research-list-item">
    //                                     <PostDefault post={post} />
    //                                 </div>
    //                             </div>
    //                         )
    //                     })
    //                 }
    //             </div>
    //         </div>
    //     )
    //
    // }

    return(
        <div className="research-list">
            {
                data.slice(0, 3).map((post, key) => {
                    return (
                        <div className="research-list-item" key={key}>
                            <Post post={post} />
                        </div>
                    )
                })
            }
        </div>
    )

};

const mapStateToProps = ({ researchReducer }) => {
  return researchReducer;
};

export default connect(mapStateToProps)(ResearchBox);

ResearchBox.propTypes = {
    data: PropTypes.array
};