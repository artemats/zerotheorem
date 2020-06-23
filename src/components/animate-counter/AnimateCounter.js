import React from 'react';
import PropTypes from 'prop-types';
import './animate-counter.scss';

const AnimateCounter = ({ value = 1000, currency = '$' }) => {

    function numberWithDot(x) {
        return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    return(
        <div className="counter">
            <div className="counter-body yellow">
                <div className="counter-body-label medium">{currency}</div>
                <div className="counter-body-value thin">{numberWithDot(value)}</div>
            </div>
            <div className="counter-control">
                <div className="counter-control-arrow __up" />
                <div className="counter-control-arrow __down" />
            </div>
        </div>
    )

};

export default AnimateCounter;

AnimateCounter.propTypes = {
    value: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
};
