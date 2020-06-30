import React, { Component } from 'react';
import WithApiService from '../../hoc/WithApiService';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettings} from "../ChartViewSettins";

class ResidualPlot extends Component {

    state = {
        isLoading: true,
        date: [],
        residual: []
    };

    componentDidMount() {

        const { api } = this.props;
        const date = [];
        const residual = [];

        api.getResidual()
            .then(data => {
                data.data.map(point => {
                    date.push(point.date);
                    residual.push(point.residual);
                });
            })
            .then(() => {
                this.setState({
                    isLoading: false,
                    date,
                    residual
                });
            })
            .catch(error => console.error(error));

    }

    render() {

        const { isLoading, date, residual } = this.state;

        if(isLoading) {
            return <LoadingIndicator />
        }

        return(
            <Plot
                data={[
                    {
                        type: 'bar',
                        x: date,
                        y: residual,
                        marker: {
                            color: '#0f4487'
                        }
                    }
                ]}
                layout={viewSettings('Residual Plot', false, {l: 30, r: 30, t: 45, b: 30}, '%y/%d/%m', '', 0).layout}
                useResizeHandler={viewSettings().useResizeHandler}
                style={viewSettings().style}
                config={viewSettings().config}
            />
        )

    }

}

export default WithApiService()(ResidualPlot);