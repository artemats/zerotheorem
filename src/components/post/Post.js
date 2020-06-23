import React from 'react';
import './post.scss';

const Post = ({ post: { preview, title, subtitle, description } }) => {

    return(
        <div className="post">
            <a href="#" className="post-preview">
                <img src={preview} alt={title} />
            </a>
            <div className="post-content">
                <p className="post-content-subtitle subtitle">{subtitle}</p>
                <h3 className="post-content-title title-3">{title}</h3>
                <p className="post-content-description">{description}</p>
                <a href="#" className="btn __border">
                    <span className="btn-title">Read more</span>
                </a>
            </div>
        </div>
    )

};

export default Post;