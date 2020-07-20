import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../../store/modal/actions';

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

    nameRef = null;
    emailRef = null;
    institutionRef = null;

    handleChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { openModal } = this.props;
        if(this.handleValid()) {
            openModal('done');
            this.handleClearFields();
        }
    };

    handleValid = () => {

        const { name, email, institution } = this.state;

        let nameError = '';
        let emailError = '';
        let institutionError = '';

        if(institution.length <= 0) {
            institutionError = 'please fill this field';
            this.scrollToNode(this.institutionRef);
        }
        if(email.length <= 0) {
            emailError = 'please fill this field';
            this.scrollToNode(this.emailRef);
        } else if(!email.includes('@')) {
            emailError = 'this field is not correct';
            this.scrollToNode(this.emailRef);
        }
        if(name.length <= 0) {
            nameError = 'please fill this field';
            this.scrollToNode(this.nameRef);
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

    handleClearFields = () => {
      this.setState({
          name: '',
          email: '',
          institution: '',
          nameError: '',
          emailError: '',
          institutionError: ''
      })
    };

    scrollToNode = (node) => {
        node.scrollIntoView({ behavior: 'smooth' });
    };


    render() {

        const { name, email, institution, message, nameError, emailError, institutionError } = this.state;

        return (
            <Fragment>
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
                                    <label
                                        className={`input-container ${Boolean(nameError) ? 'error' : ''}`}
                                        ref={(node) => this.nameRef = node} >
                                        <span className="input-label">Name:</span>
                                        <span className="input-error">{nameError}</span>
                                        <input
                                            type="text"
                                            className="input"
                                            value={name}
                                            name="name"
                                            onChange={this.handleChangeValue} />
                                    </label>
                                    <label
                                        className={`input-container  ${Boolean(emailError) ? 'error' : ''}`}
                                        ref={(node) => this.emailRef = node} >
                                        <span className="input-label">E-mail:</span>
                                        <span className="input-error">{emailError}</span>
                                        <input
                                            type="text"
                                            className="input"
                                            value={email}
                                            name="email"
                                            onChange={this.handleChangeValue} />
                                    </label>
                                    <label
                                        className={`input-container ${Boolean(institutionError) ? 'error' : ''}`}
                                        ref={(node) => this.institutionRef = node} >
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
            </Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
   openModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);