import React from 'react';
import Countdown from "react-countdown";

const CountdownTimer = () => {

    const onCompleteTimer = () => {

        alert('Time is over');

    };

    return (
        <div className="timer">
            <Countdown date="2020-07-10T07:55:03" daysInHours={true} onComplete={onCompleteTimer} />
        </div>
    )

};

export default CountdownTimer;