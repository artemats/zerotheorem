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
                            color: '#a78814',
                            line: {
                                color: 'red'
                            }
                        }
                    }
                ]}
                layout={ {
                    title: {
                        text: 'Residual Histogram',
                        font: {
                            size: 14,
                            color: '#ffffff',
                            family: 'Rubik'
                        },
                    },
                    autosize: true,
                    margin: {
                        l: 30,
                        r: 30,
                        t: 80,
                        b: 30
                    },
                    xaxis: {
                        color: '#8f8f8f',
                        tickfont: {
                            size: 9,
                            color: '#8f8f8f',
                            family: 'Rubik'
                        },
                        showline: true,
                        linecolor: '#555456',
                        showgrid: true,
                        gridcolor: '#211e22',
                    },
                    yaxis: {
                        color: '#8f8f8f',
                        tickfont: {
                            size: 9,
                            color: '#8f8f8f',
                            family: 'Rubik'
                        },
                        showline: true,
                        linecolor: '#555456',
                        gridcolor: '#211e22'
                    },
                    paper_bgcolor: 'transparent',
                    plot_bgcolor: 'transparent'
                } }
                useResizeHandler={true}
                style={{
                    width: "100%",
                    height: "100%"
                }}
            />
        )
    }

}

export default WithApiService()(ResidualHistogram);