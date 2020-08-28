import React, { Component, Fragment } from 'react';
import WithApiService from '../../hoc/WithApiService';
import { connect } from 'react-redux';
import { fetchTrendSuccess, fetchTrendError } from '../../../store/charts/trend/actions';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import DateFilter from "../../date-filter/DateFilter";
import {lastWeek, _today} from "../../globalFunctions/detectDate";
import {transformDateFormat} from "../../globalFunctions/transformDateFormat";
import {fetchData} from "../../globalFunctions/fetchData";

class CostOfProduction extends Component{

    constructor(props) {
        super(props);
        this.onChangeFilter = this.onChangeFilter.bind(this);
    }

    componentDidMount() {
        const { api, fetchTrendSuccess, fetchTrendError, data } =  this.props;
        if(isEmpty(data)) {
            fetchData(api.getTrend, fetchTrendSuccess, fetchTrendError, transformDateFormat(lastWeek()));
        }
    }

    onChangeFilter(startDate) {
        const { api, fetchTrendSuccess, fetchTrendError } =  this.props;
        fetchData(api.getTrend, fetchTrendSuccess, fetchTrendError, startDate);
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
                            name: 'Forecast',
                            line: {
                                color: '#0f5bb9',
                                width: 2,
                                dash: 'dot',
                            },
                            type: 'scatter',
                            mode: 'lines',
                        },
                        {
                            x: date,
                            y: rmse,
                            name: 'Confidence interval',
                            line: {
                                color: '#1f292a',
                                width: 40
                            },
                            type: 'scatter',
                            mode: 'lines',
                        },
                        {
                            x: date,
                            y: upper_band,
                            name: 'Actual',
                            line: {
                                color: '#deb513',
                                width: 2
                            },
                            type: 'scatter',
                            mode: 'lines',
                        }
                    ]}
                    layout={viewSettingsLayout('Cost Of Production Index ', true, {l: 45, r: 30, t: 95, b: 30}, '%y/%d/%m', '', 0, '', '').layout}
                    useResizeHandler={viewSettingsLayout().useResizeHandler}
                    style={viewSettingsLayout().style}
                    config={viewSettingsConfig().config}
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

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(CostOfProduction));