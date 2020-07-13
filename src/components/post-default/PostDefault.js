import React from 'react';
import { Link } from 'react-router-dom';
import {toURLTransform} from "../globalFunctions/globalFunctions";

const PostDefault = ({ post: { title, subtitle } }) => {

    return(
        <div className="post">
            <div className="post-content">
                <p className="post-content-subtitle regular">{subtitle}</p>
                <p className="post-content-title regular">{title}</p>
                <Link to={`/research/${toURLTransform(title)}`} className="btn lg">
                    <span className="btn-title">Read more</span>
                </Link>
            </div>
        </div>
    )

};

export default PostDefault;