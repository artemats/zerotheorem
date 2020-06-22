import React from 'react';
import PropTypes  from 'prop-types';

const ErrorIndicator = ({ error }) => {

    console.log(error);

    return (
        <p>Error! - {error}</p>
    )

};

export default ErrorIndicator;

ErrorIndicator.propTypes = {
    error: PropTypes.object,
};