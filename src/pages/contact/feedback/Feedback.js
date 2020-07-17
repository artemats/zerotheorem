import React, { Component } from 'react';
import './feedback.scss';

class Feedback extends Component {

    state = {
        name: '',
        nameError: null,
        email: '',
        emailError: null,
        institution: '',
        institutionError: null,
        message: '',
    };

    handleChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.handleValid());
        console.log(this.state);
    };

    handleValid = () => {

        const { name, email, institution } = this.state;

        let nameError = '';
        let emailError = '';
        let institutionError = '';

        if(name.length <= 0) {
            nameError = 'please fill this field';
        }
        if(email.length <= 0) {
            emailError = 'please fill this field';
        }
        if(institution.length <= 0) {
            institutionError = 'please fill this field';
        }

        if(nameError || emailError || institutionError) {

            this.setState({
               nameError,
               emailError,
               institutionError
            });

            return false;

        }

        return true;

    };

    render() {

        const { name, email, institution, message, nameError, emailError, institutionError } = this.state;

        return (
            <div className="feedback">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                        <div className="feedback-title">
                            <h3 className="title-3">Want access to data feed VIA API?</h3>
                        </div>
                        <div className="feedback-description">
                            <p>Please fill out the contact form</p>
                        </div>
                        <div className="feedback-fields">
                            <form onSubmit={this.handleSubmit}>
                                <label className={`input-container ${Boolean(nameError) ? 'error' : ''}`}>
                                    <span className="input-label">Name:</span>
                                    <span className="input-error">{nameError}</span>
                                    <input
                                        type="text"
                                        className="input"
                                        value={name}
                                        name="name"
                                        onChange={this.handleChangeValue} />
                                </label>
                                <label className={`input-container  ${Boolean(emailError) ? 'error' : ''}`}>
                                    <span className="input-label">E-mail:</span>
                                    <span className="input-error">{emailError}</span>
                                    <input
                                        type="text"
                                        className="input"
                                        value={email}
                                        name="email"
                                        onChange={this.handleChangeValue} />
                                </label>
                                <label className={`input-container ${Boolean(institutionError) ? 'error' : ''}`}>
                                    <span className="input-label">Institution:</span>
                                    <span className="input-error">{institutionError}</span>
                                    <input
                                        type="text"
                                        className="input"
                                        value={institution}
                                        name="institution"
                                        onChange={this.handleChangeValue} />
                                </label>
                                <div className="feedback-detail">
                                    <p>Please specify your use case for our direct api data feed?</p>
                                </div>
                                <label className="input-container">
                                    <span className="input-label">Message:</span>
                                    <textarea
                                        className="textarea"
                                        value={message}
                                        name="message"
                                        onChange={this.handleChangeValue} />
                                </label>
                                <div className="feedback-more">
                                    <p>*Please note that custom API data feed is a paid service!*</p>
                                </div>
                                <div className="feedback-action">
                                    <button className="btn lg">
                                        <span className="btn-title">Send</span>
                                    </button>
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