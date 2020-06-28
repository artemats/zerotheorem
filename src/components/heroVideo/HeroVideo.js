import React, { useState, useEffect } from 'react';
import video from '../../assets/video/hero.mp4';

const HeroVideo = () => {

    const [onLoaded, setOnLoaded] = useState(false);

    useEffect(() => {

        setOnLoaded(true);

    });

    if(!onLoaded) {

        return <div>Loading...</div>

    }

    return(
        <div className="hero-video">
            <video
                className="hero-video-item"
                width="100%"
                height="100%"
                preload={'auto'}
                loop
                muted
                playsInline
                autoPlay>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )

};

export default HeroVideo;