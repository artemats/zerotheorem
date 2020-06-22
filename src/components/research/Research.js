import React from 'react';
import './research.scss';
import Post from "../post/Post";

const initialState = [
    {
        preview: 'https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
        subtitle: 'LITERATURE review',
        description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework'
    },
    {
        preview: 'https://images.pexels.com/photos/1097946/pexels-photo-1097946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Predicting Bitcoin Price Direction Exchange Rate U',
        subtitle: 'LITERATURE review',
        description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate'
    },
    {
        preview: 'https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'The Economics of Bitcoin Price Formation',
        subtitle: 'LITERATURE review',
        description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global'
    }
];

const Research = () => {

    return(
        <section className="section research">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="subtitle">useful</p>
                        <h2 className="title-2 title-border">Research</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="research-list">
                            {
                                initialState.map((post, key) => {
                                    return (
                                        <div className="research-list-item" key={key}>
                                            <Post post={post} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Research;