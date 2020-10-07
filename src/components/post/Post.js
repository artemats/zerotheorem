import React from 'react';
import { Link } from 'react-router-dom';
import {toURLTransform} from "../globalFunctions/globalFunctions";
import './post.scss';

const Post = ({ post: { preview, title, date, timeRead, description } }) => {


    return(
        <Link to={`/research/${toURLTransform(title)}`} className="post">
            <div className="post-preview">
                <img src={preview} alt={title} />
            </div>
            <div className="post-content">
                <p className="post-content-date">{date} - {timeRead} read</p>
                <h4 className="post-content-title title-4 extra-bold">{title}</h4>
                <p className="post-content-description">{description}</p>
            </div>
        </Link>
    )

};

export default Post;