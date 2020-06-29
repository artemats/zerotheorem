import React, { Component } from 'react';
import WithApiService from '../../hoc/WithApiService';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettings} from "../ChartViewSettins";

class TrendPlot extends Component {

    state = {
        isLoading: true,
        date: [],
        prediction: [],
        rmse: [],
        upper_band: [],
        lower_band: []
    };

    componentDidMount() {

        const { api } =  this.props;
        const date = [];
        const prediction = [];
        const rmse = [];
        const upper_band = [];
        const lower_band = [];

        api.getTrend()
            .then(data => {
                data.data.map(point => {
                    date.push(point.date);
                    prediction.push(point.prediction);
                    rmse.push(point.rmse);
                    upper_band.push(point.upper_band);
                    lower_band.push(point.lower_band);
                });
            })
            .then(() => {
                this.setState({
                    isLoading: false,
                    date,
                    prediction,
                    rmse,
                    upper_band,
                    lower_band
                });
            })
            .catch(error => console.error(error));

    }

    render() {

        const { isLoading, date, prediction, rmse, upper_band, lower_band } = this.state;

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
                            color: '#deb513',
                            width: 1
                        },
                        type: 'scatter',
                        mode: 'lines',
                    }
                ]}
                layout={viewSettings('', true, {l: 30, r: 30, t: 35, b: 30}, '%y/%d/%m', ).layout}
                useResizeHandler={viewSettings().useResizeHandler}
                style={viewSettings().style}
            />
        )

    }

}

export default WithApiService()(TrendPlot);
