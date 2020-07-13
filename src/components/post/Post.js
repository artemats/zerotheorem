import React from 'react';
import { Link } from 'react-router-dom';
import {toURLTransform} from "../globalFunctions/globalFunctions";
import './post.scss';

const Post = ({ post: { preview, title, subtitle, description } }) => {

    return(
        <div className="post">
            <Link to={`/research/${toURLTransform(title)}`} className="post-preview">
                <img src={preview} alt={title} />
            </Link>
            <div className="post-content">
                <p className="post-content-subtitle subtitle">{subtitle}</p>
                <h3 className="post-content-title title-3">{title}</h3>
                <p className="post-content-description">{description}</p>
                <Link to={`/research/${toURLTransform(title)}`} className="btn __border">
                    <span className="btn-title">Read more</span>
                </Link>
            </div>
        </div>
    )

};

export default Post;