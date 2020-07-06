import React, { Component } from 'react';
import WithApiService from '../../hoc/WithApiService';
import { connect } from 'react-redux';
import { fetchMetricSuccess, fetchMetricError } from '../../../store/metric-box/actions';
import {isEmpty} from "../../globalFunctions/globalFunctions";
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";

class MetricBox extends Component {

    componentDidMount() {

        const { api, fetchMetricSuccess, fetchMetricError, data } = this.props;

        if(isEmpty(data)) {
            api.getMetric()
                .then(metricData => fetchMetricSuccess(metricData.data))
                .catch(error => fetchMetricError(error));
        }

    }

    onForecastDirection = direction => {
        let dir = direction === -1 ? 'Down' : 'Up';
        return <p className="stat-value">{dir} <span className={`stat-value-arrow __${dir.toLocaleLowerCase()}`} /></p>;
    };

    render() {

        const { isLoading, data: { stationary, mape, mads, predicted_direction, predicted_price, rmse } } = this.props;

        if(isLoading) {
            return <LoadingIndicator />
        }

        return (
            <div className="stat">
                <div className="stat-list __middle">
                    <div className="stat-list-item">
                        <div className="stat-row">
                            <p className="stat-label">RMSE:</p>
                            <div className="stat-value">{rmse}</div>
                        </div>
                        <div className="stat-row">
                            <p className="stat-label">Stationary:</p>
                            <div className="stat-value">XX</div>
                        </div>
                    </div>
                    <div className="stat-list-item">
                        <div className="stat-row">
                            <p className="stat-label">MAPPE:</p>
                            <div className="stat-value">{mape}</div>
                        </div>
                        <div className="stat-row">
                            <p className="stat-label">Accuary:</p>
                            <div className="stat-value">XX</div>
                        </div>
                    </div>
                    <div className="stat-list-item">
                        <div className="stat-row">
                            <p className="stat-label">MADS:</p>
                            <div className="stat-value">{mads}</div>
                        </div>
                    </div>
                </div>
                <hr className="hr" />
                <div className="stat-list">
                    <div className="stat-list-item">
                        <p className="stat-label">Forecasted Price:</p>
                        <p className="stat-value">$ {predicted_price.toFixed(2)} <span className="stat-value-arrow __down" /> </p>
                    </div>
                    <div className="stat-list-item">
                        <p className="stat-label">Forecasted Direction:</p>
                        {this.onForecastDirection(predicted_direction)}
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = ({ metricReducer }) => {
    return metricReducer;
};

const mapDispatchToProps = {
    fetchMetricSuccess,
    fetchMetricError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(MetricBox));