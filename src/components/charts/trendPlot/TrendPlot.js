import React, { Component, Fragment } from 'react';
import WithApiService from '../../hoc/WithApiService';
import { connect } from 'react-redux';
import { fetchTrendSuccess, fetchTrendError } from '../../../store/charts/trend/actions';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettings} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import DateFilter from "../../date-filter/DateFilter";
import {lastWeek, _today} from "../../globalFunctions/detectDate";
import {transformDateFormat} from "../../globalFunctions/transformDateFormat";

class TrendPlot extends Component {

    constructor(props) {
        super(props);
        this.onChangeFilter = this.onChangeFilter.bind(this);
    }

    componentDidMount() {
        const { api, fetchTrendSuccess, fetchTrendError, data } =  this.props;
        if(isEmpty(data)) {
            api.getTrend(transformDateFormat(lastWeek()))
                .then(trendData => {
                    fetchTrendSuccess(trendData);
                })
                .catch(error => fetchTrendError(error));
        }
    }

    onChangeFilter(startDate) {
        const { api, fetchTrendSuccess, fetchTrendError } =  this.props;
        api.getTrend(startDate)
            .then(trendData => {
                fetchTrendSuccess(trendData);
            })
            .catch(error => fetchTrendError(error));
    }

    render() {

        const { isLoading, data: { date, prediction, rmse, upper_band, lower_band } } = this.props;

        if(isLoading) {
            return <LoadingIndicator />
        }

        return(
            <Fragment>
                <Plot
                    data={[
                        {
                            x: date,
                            y: prediction,
                            name: 'Prediction',
                            line: {
                                color: '#0f5bb9',
                                width: 6
                            },
                            type: 'scatter',
                            mode: 'lines',
                        },
                        {
                            x: date,
                            y: rmse,
                            name: 'Rmse',
                            line: {
                                color: '#1f292a',
                                width: 20
                            },
                            type: 'scatter',
                            mode: 'lines',
                        },
                        {
                            x: date,
                            y: upper_band,
                            name: 'Upper band',
                            line: {
                                color: '#deb513',
                                width: 1
                            },
                            type: 'scatter',
                            mode: 'lines',
                        },
                        {
                            x: date,
                            y: lower_band,
                            name: 'Lower band',
                            line: {
                                color: '#FF4000',
                                width: 1
                            },
                            type: 'scatter',
                            mode: 'lines',
                        }
                    ]}
                    layout={viewSettings('Trend Plot', true, {l: 45, r: 30, t: 95, b: 30}, '%y/%d/%m', '', 0, '', '<b>Price USD</b>').layout}
                    useResizeHandler={viewSettings().useResizeHandler}
                    style={viewSettings().style}
                    config={viewSettings().config}
                />
                <DateFilter
                    onSubmit={this.onChangeFilter}
                    defaultStartDate={lastWeek()}
                    defaultFinishedDate={_today}
                    defaultPeriod={0} />
            </Fragment>
        )

    }

}

const mapStateToProps = ({ trendReducer }) => {
    return trendReducer;
};

const mapDispatchToProps = {
    fetchTrendSuccess,
    fetchTrendError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(TrendPlot));
