import React from 'react';
import './contact.scss';
import Feedback from "./feedback/Feedback";

const Contact = () => {

    return (
        <section className="section hero inner-page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hero-title">
                            <p className="subtitle">Resources</p>
                            <h1 className="title-1 title-border">Contact</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <Feedback />
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Contact;