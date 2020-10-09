import React, { useState } from 'react';
import { connect } from 'react-redux';
import { openModal } from 'Store/modal/actions';
import './subscribe.scss';

const Subscribe = ({ openModal }) => {

    const [subscriptionType, setSubscriptionType] = useState([
        {
            title: 'Backtests',
            value: 'Backtests',
        },
        {
            title: 'Academic articles',
            value: 'Academic articles'
        },
        {
            title: 'Research',
            value: 'Research'
        },
        {
            title: 'Education',
            value: 'Education'
        }
    ]);
    const [subscriber, setSubscriber] = useState(
        {
            type: '',
            email: '',
        }
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        if(handleCheckEmail()) {
            openModal('done');
            setSubscriber({
                email: ''
            });
        }
    };

    const handleOnChange = (event) => {
        setSubscriber({
            ...subscriber,
            [event.target.name]: event.target.value
        });
    };

    const handleCheckEmail = () => {
        return !(subscriber.email.length <= 0 || !subscriber.email.includes('@'));
    };

    return (
        <section className="section subscribe">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={handleSubmit}>
                            <div className="subscribe-box">
                                <p className="subtitle">Quant lab</p>
                                <p className="title-2">Subscribe to Our Blog</p>
                                <p>Stay up to date with the latest tips and news.</p>
                                <div className="subscribe-options">
                                    {
                                        subscriptionType.map((type, key) => {
                                            return (
                                                <label className="input-container input-container-check" key={key}>
                                                    <input
                                                        type="radio"
                                                        name="type"
                                                        value={type.value}
                                                        className="input-check"
                                                        onChange={handleOnChange}
                                                    />
                                                    <div className="input-check-icon" />
                                                    <div className="input-check-title">{type.title}</div>
                                                </label>
                                            )
                                        })
                                    }
                                </div>
                                <div className="input-container input-container-row">
                                    <input
                                        type="email"
                                        name="email"
                                        className="input"
                                        placeholder="E-mail"
                                        value={subscriber.email}
                                        onChange={handleOnChange}
                                        />
                                    <button className={`btn ${handleCheckEmail() ? '' : 'disabled'}`}>
                                        <span className="btn-title">Send</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

const mapDispatchToProps = {
     openModal
};

export default connect(null, mapDispatchToProps)(Subscribe);