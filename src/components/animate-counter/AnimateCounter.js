import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Odometer from 'react-odometerjs';
import './animate-counter.scss';

class AnimateCounter extends Component{

    state = {
        value: this.props.value,
        currency: this.props.currency,
        direction: ''
    };

    componentDidMount() {
        this.valueInterval = setInterval(() => this.update(), 3000);
    }

    componentWillUnmount() {
        clearInterval(this.valueInterval);
    }

    getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);

    update() {
        let newValue = this.getRandomInt(1000, 2000);
        let direction = this.state.value > newValue ? 'down' : 'up';
        this.setState({
            direction,
            value: newValue
        });
        setTimeout(() => {
            this.setState({
                value: newValue
            });
        }, 400);
        setTimeout(() => {
            this.setState({
                direction: ''
            })
        }, 1500);
    }

    numberWithDot(x) {
        return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    };

    render() {

        const { value, currency, direction } = this.state;
        return(
            <div className="counter">
                <div className="counter-body yellow">
                    <div className="counter-body-label medium">{currency}</div>
                    <div className="counter-body-value thin">
                        <Odometer value={value} format="(.ddd).dd" duration={1000} />
                    </div>
                </div>
                <div className={`counter-control ${direction}`}>
                    <div className="counter-control-arrow __up" />
                    <div className="counter-control-arrow __down" />
                </div>
            </div>
        )

    }

}

export default AnimateCounter;

AnimateCounter.propTypes = {
    value: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
};
