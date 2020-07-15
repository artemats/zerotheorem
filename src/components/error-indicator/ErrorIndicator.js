import React from 'react';
import PropTypes  from 'prop-types';

const ErrorIndicator = ({ error }) => {

    console.log(error);

    return (
        <div>
            <p>Error! - {error}</p>
        </div>
    )

};

export default ErrorIndicator;

ErrorIndicator.propTypes = {
    error: PropTypes.object,
};