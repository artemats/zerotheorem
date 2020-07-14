import React, { Component } from 'react';
import './feedback.scss';

class Feedback extends Component {

    state = {
        q1: '',
        q2: '',
        q3: '',
        accessToData: null,
        monthValue: null
    };

    handleChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {

        event.preventDefault();
        console.log(this.state);

    };

    render() {

        const { q1, q2, q3 } = this.state;

        return (
            <div className="feedback">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <div className="feedback-title">
                            <h3 className="title-3">Feedback form</h3>
                        </div>
                        <div className="feedback-description">
                            <p>Please fill out our feedback form and help us shape this platform</p>
                        </div>
                        <div className="feedback-fields">
                            <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="input-container">
                                            <span className="input-label">Q1: Would is do you like/dislike about our platform?</span>
                                            <input
                                                type="text"
                                                className="input"
                                                value={q1}
                                                name="q1"
                                                onChange={this.handleChangeValue} />
                                        </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="input-container">
                                            <span className="input-label">Q2: Where can we improve?</span>
                                            <input
                                                type="text"
                                                className="input"
                                                value={q2}
                                                name="q2"
                                                onChange={this.handleChangeValue} />
                                        </label>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="input-container">
                                            <span className="input-label">Q3: What future features would you like us in introduce?</span>
                                            <input
                                                type="text"
                                                className="input"
                                                value={q3}
                                                name="q3"
                                                onChange={this.handleChangeValue} />
                                        </label>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-container">
                                            <span className="input-label">Q4: Would you like access to direct access to our data?</span>
                                            <div className="check-list">
                                                <label className="check">
                                                    <input
                                                        type="radio"
                                                        name="accessToData"
                                                        className="input-check"
                                                        value={true}
                                                        onChange={this.handleChangeValue} />
                                                    <span className="check-title">Yes</span>
                                                    <span className="check-btn" />
                                                </label>
                                                <label className="check">
                                                    <input
                                                        type="radio"
                                                        name="accessToData"
                                                        className="input-check"
                                                        value={false}
                                                        onChange={this.handleChangeValue} />
                                                    <span className="check-title">No</span>
                                                    <span className="check-btn" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-container">
                                            <span className="input-label">Q5: How much value would you assign per month to our data feed, forecasts, baseline models, market metrics?</span>
                                            <div className="check-list">
                                                <label className="check">
                                                    <input
                                                        type="radio"
                                                        name="monthValue"
                                                        className="input-check"
                                                        value={50}
                                                        onChange={this.handleChangeValue} />
                                                    <span className="check-title">50$</span>
                                                    <span className="check-btn" />
                                                </label>
                                                <label className="check">
                                                    <input
                                                        type="radio"
                                                        name="monthValue"
                                                        className="input-check"
                                                        value={100}
                                                        onChange={this.handleChangeValue}/>
                                                    <span className="check-title">100$</span>
                                                    <span className="check-btn" />
                                                </label>
                                                <label className="check">
                                                    <input
                                                        type="radio"
                                                        name="monthValue"
                                                        className="input-check"
                                                        value={150}
                                                        onChange={this.handleChangeValue} />
                                                    <span className="check-title">150$</span>
                                                    <span className="check-btn" />
                                                </label>
                                                <label className="check">
                                                    <input
                                                        type="radio"
                                                        name="monthValue"
                                                        className="input-check"
                                                        value={200}
                                                        onChange={this.handleChangeValue} />
                                                    <span className="check-title">200$</span>
                                                    <span className="check-btn" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="feedback-action">
                                            <button className="btn lg">
                                                <span className="btn-title">Send Data</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Feedback;