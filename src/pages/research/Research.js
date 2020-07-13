import React from 'react';
import ResearchBox from "../../components/research-box/ResearchBox";

const Research = () => {

    return(
        <section className="section hero inner-page">
            <div className="abstract __8" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hero-title">
                            <p className="subtitle">Information</p>
                            <h1 className="title-1 title-border">Research</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ResearchBox defaultTheme={true} />
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Research;