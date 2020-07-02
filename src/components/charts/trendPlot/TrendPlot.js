import React, { Component } from 'react';
import WithApiService from '../../hoc/WithApiService';
import { connect } from 'react-redux';
import { fetchTrendSuccess, fetchTrendError } from '../../../store/charts/trend/actions';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettings} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";
import {fetchResidualPlotError} from "../../../store/charts/residualPlot/actions";

class TrendPlot extends Component {



    componentDidMount() {

        const { api, fetchTrendSuccess, fetchTrendError, data } =  this.props;

        if(isEmpty(data)) {
            api.getTrend()
                .then(trendData => {
                    fetchTrendSuccess(trendData);
                })
                .catch(error => fetchTrendError(error));
        }

    }

    render() {

        const { isLoading, data: { date, prediction, rmse, upper_band, lower_band } } = this.props;

        if(isLoading) {
            return <LoadingIndicator />
        }

        return(
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
                            width: 10
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
                layout={viewSettings('', true, {l: 30, r: 30, t: 35, b: 30}, '%y/%d/%m', ).layout}
                useResizeHandler={viewSettings().useResizeHandler}
                style={viewSettings().style}
                config={viewSettings().config}
            />
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
