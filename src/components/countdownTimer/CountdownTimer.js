import React, { useEffect, useState } from 'react';
import './countdowntimer.scss';

const CountdownTimer = () => {

    const calculateTimeLeft = () => {
        const difference = +new Date("2020-06-25T09:20:03") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return '00';
        }

        timerComponents.push(
            <span key={interval} className="timer-item bold">
                <span className="timer-item-value">
                    {timeLeft[interval] <= 9 ? '0'+timeLeft[interval] : timeLeft[interval]}
                </span>
                <span className="timer-item-dots">:</span>
            </span>
        );
    });

    return(
        <div className="timer">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    )

};

export default CountdownTimer;