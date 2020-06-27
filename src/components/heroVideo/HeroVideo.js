import React from 'react';
import video from '../../assets/video/hero.mp4';

const HeroVideo = () => {

    return(
        <div className="hero-video">
            <video className="hero-video-item" width="100%" height="100%" loop muted playsInline autoPlay>
                <source type="video/mp4" src={video} />
            </video>
        </div>
    )

};

export default HeroVideo;