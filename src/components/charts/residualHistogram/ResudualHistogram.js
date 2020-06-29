import React, { Component } from 'react';
import WithApiService from '../../hoc/WithApiService';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import {viewSettings} from "../ChartViewSettins";

class ResidualHistogram extends Component {

    state = {
        isLoading: true,
        x: [],
        y: []
    };

    componentDidMount() {
        const { api } = this.props;
        api.getResidualHistogram()
            .then(data => {
                this.setState({
                    isLoading: false,
                    x: data.data.bins,
                    y: data.data.frecuencies
                })
            })
            .catch(error => console.error(error));
    }

    render() {
        const { isLoading, x, y } = this.state;
        if(isLoading) {
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
                layout={viewSettings('Residual Histogram', false, {l: 30, r: 30, t: 45, b: 30} ).layout}
                useResizeHandler={viewSettings().useResizeHandler}
                style={viewSettings().style}
            />
        )
    }

}

export default WithApiService()(ResidualHistogram);