import React, { useState, useEffect } from 'react';
import './date-filter.scss';

const DateFilter = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [period, setPeriod] = useState('week');

    const handleToggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseSelect = () => {
      setIsOpen(false);
    };

    const handleOnChange = (event) => {
        setPeriod(event.target.value);
    };

    useEffect(() => {
       console.log(period);
    });

    return(
        <div className="dashboard-box-filter">
            <div className={`dropdown ${isOpen ? 'is-active': ''}`}>
                <div className="dropdown-header" onClick={handleToggleSelect}>
                    <span className="dropdown-header-title semi-bold">Last Week</span>
                </div>
                <div className="dropdown-select">
                    <div className="dropdown-select-list">
                        <label className="input-container">
                            <input
                                type="radio"
                                name="period"
                                value="week"
                                className="input-check"
                                checked={period === 'week'}
                                onChange={handleOnChange} />
                            <span className="input-label semi-bold">Last Week</span>
                        </label>
                        <label className="input-container">
                            <input
                                type="radio"
                                name="period"
                                value="month"
                                className="input-check"
                                checked={period === 'month'}
                                onChange={handleOnChange} />
                            <span className="input-label semi-bold">Last Month</span>
                        </label>
                        <label className="input-container">
                            <input
                                type="radio"
                                name="period"
                                value="quarter"
                                className="input-check"
                                checked={period === 'quarter'}
                                onChange={handleOnChange} />
                            <span className="input-label semi-bold">Last Quarter</span>
                        </label>
                        <label className="input-container">
                            <input
                                type="radio"
                                name="period"
                                value="half-year"
                                className="input-check"
                                checked={period === 'half-year'}
                                onChange={handleOnChange} />
                            <span className="input-label semi-bold">Last Half Year</span>
                        </label>
                        <label className="input-container">
                            <input
                                type="radio"
                                name="period"
                                value="year"
                                className="input-check"
                                checked={period === 'year'}
                                onChange={handleOnChange} />
                            <span className="input-label semi-bold">Last Year</span>
                        </label>
                        <hr className="hr dropdown-divider" />
                        <div className="input-container">
                            <span className="input-container-title">From</span>
                            <input type="text" className="input sm" />
                        </div>
                        <div className="input-container">
                            <span className="input-container-title">To</span>
                            <input type="text" className="input sm" />
                        </div>
                        <div className="dropdown-action">
                            <button className="btn sm">Apply</button>
                            <button className="btn sm default" onClick={handleCloseSelect}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default DateFilter;