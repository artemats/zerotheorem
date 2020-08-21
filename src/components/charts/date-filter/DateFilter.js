import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

const today = new Date();
const btnClasses = 'input-label dropdown-btn semi-bold';

const DateFilter = ({ onSubmit }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [period, setPeriod] = useState('week');
    const [startDate, setStartDate] = useState(today);
    const [finishedDate, setFinishedDate] = useState(today);

    const handleToggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseSelect = () => {
      setIsOpen(false);
    };

    const getLastWeek = () => {
        let todayForWeek = new Date();
        let lastWeek = todayForWeek.getDate() - 7;
        // return new Date(today.setDate(lastWeek));
        setStartDate(new Date(todayForWeek.setDate(lastWeek)));
        setFinishedDate(today);
        setPeriod('week');
    };

    const getLastMonths = (count) => {
        let todayForMonth = new Date();
        let period = 'month';
        let lastMonth = todayForMonth.getMonth() - count;
        // return new Date(today.setMonth(lastMonth));
        setStartDate(new Date(todayForMonth.setMonth(lastMonth)));
        setFinishedDate(today);
        if(count === 3) {
            period = 'quarter';
        } else if(count === 6) {
            period = 'half_year';
        } else {
            period = 'month';
        }
        setPeriod(period);
    };

    const getLastYear = () => {
      let todayForYear = new Date();
      let lastYear = todayForYear.getFullYear() - 1;
      // return new Date(today.setFullYear(lastYear));
        setStartDate(new Date(todayForYear.setFullYear(lastYear)));
        setFinishedDate(today);
        setPeriod('year');
    };

    const toFormatDate = (date = today, separator = '-') => {
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        let yyyy = date.getFullYear();
        dd < 10 ? dd = '0' + dd : dd;
        mm < 10 ? mm = '0' + mm : mm;
        return yyyy + separator + mm + separator + dd;
    };

    const onChangeSetStartDate = (date) => {
        setStartDate(date);
        setPeriod('');
    };

    const onChangeSetFinishedDate = (date) => {
        setFinishedDate(date);
        setPeriod('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(toFormatDate(startDate), toFormatDate(finishedDate));
        setIsOpen(false);
    };

    useEffect(() => {
        // console.log('last year - ', getLastYear());
        // console.log('last half year - ', getLastMonths(6));
        // console.log('last quarter - ', getLastMonths(3));
        // console.log('last month - ', getLastMonths(1));
        // console.log('last week - ', getLastWeek());
        // console.log('today - ', today);
    });

    return(
        <div className="dashboard-box-filter">
            <div className={`dropdown ${isOpen ? 'is-active': ''}`}>
                <div className="dropdown-header" onClick={handleToggleSelect}>
                    <span className="dropdown-header-title semi-bold">Last Week</span>
                </div>
                <div className="dropdown-select">
                    <form onSubmit={handleSubmit}>
                        <div className="dropdown-select-list">
                            <div className="input-container">
                                <span
                                    className={`${btnClasses} ${period === 'week' ? 'active' : ''}`}
                                    onClick={() => getLastWeek()}>Last Week</span>
                            </div>
                            <div className="input-container">
                                <span
                                    className={`${btnClasses} ${period === 'month' ? 'active' : ''}`}
                                    onClick={() => getLastMonths(1)}>Last Month</span>
                            </div>
                            <div className="input-container">
                                <span
                                    className={`${btnClasses} ${period === 'quarter' ? 'active' : ''}`}
                                    onClick={() => getLastMonths(3)}>Last Quarter</span>
                            </div>
                            <div className="input-container">
                                <span
                                    className={`${btnClasses} ${period === 'half_year' ? 'active' : ''}`}
                                    onClick={() => getLastMonths(6)}>Last Half Year</span>
                            </div>
                            <div className="input-container">
                                <span
                                    className={`${btnClasses} ${period === 'year' ? 'active' : ''}`}
                                    onClick={() => getLastYear()}>Last Year</span>
                            </div>
                            <hr className="hr dropdown-divider" />
                            <div className="input-container">
                                <span className="input-container-title">From</span>
                                <DatePicker
                                    type="text"
                                    className="input sm"
                                    selected={startDate}
                                    dateFormat="MM.dd.yyyy"
                                    onChange={date => onChangeSetStartDate(date)} />
                            </div>
                            <div className="input-container">
                                <span className="input-container-title">To</span>
                                <DatePicker
                                    className="input sm"
                                    selected={finishedDate}
                                    dateFormat="MM.dd.yyyy"
                                    onChange={date => onChangeSetFinishedDate(date)} />
                            </div>
                            <div className="dropdown-action">
                                <button className="btn sm">Apply</button>
                                <span className="btn sm default" onClick={handleCloseSelect}>Cancel</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

};

export default DateFilter;