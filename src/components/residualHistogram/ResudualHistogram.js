import React, { Component, useState, useEffect } from 'react';
import WithApiService from '../../components/hoc/WithApiService';
import Plot from 'react-plotly.js';
import LoadingIndicator from "../loadingIndicator/LoadingIndicator";

class ResidualHistogram extends Component {

    state = {
        isLoading: false,
        x: [],
        y: []
    };

    componentDidMount() {
        const { api } = this.props;
        api.getResidualHistogram()
            .then(data => {
                this.setState({
                    isLoading: true,
                    x: data.data.bins,
                    y: data.data.frecuencies
                })
            });
    }

    render() {
        const { isLoading, x, y } = this.state;
        if(!isLoading) {
            return <LoadingIndicator />
        }
        return(
            <Plot
                data={[
                    {
                        type: 'bar',
                        x: x,
                        y: y,
                        marker: {
                            color: '#a78814'
                        }
                    }
                ]}
                layout={ {
                    title: 'Residual Histogram',
                    width: 390,
                    height: 320
                } }
                config={{
                    responsive: true
                }}
            />
        )
    }

}

export default WithApiService()(ResidualHistogram);