import React, { Component } from 'react';
import WithApiService from '../../hoc/WithApiService';
import { connect } from 'react-redux';
import { fetchProbPlotSuccess, fetchProbPlotError } from '../../../store/charts/probabilityPlot/actions';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import {viewSettings} from "../ChartViewSettins";
import Plot from "react-plotly.js";
import {isEmpty} from "../../globalFunctions/globalFunctions";

class ProbabilityPlot extends Component {

    componentDidMount() {

        const { api, fetchProbPlotSuccess, fetchProbPlotError, data } = this.props;
        if(isEmpty(data)) {
            api.getProbPlot()
                .then(probData => fetchProbPlotSuccess(probData))
                .catch(error => fetchProbPlotError(error));
        }
    }

    render() {

        const { isLoading, data: { prob_theorical, prob_actual, line } } = this.props;

        console.log(this.props);

        if(isLoading) {
            return <LoadingIndicator />
        }

        return (
            <Plot
                data={[
                    {
                        x: prob_theorical,
                        y: prob_actual,
                        name: 'Actual theoretical',
                        line: {
                            color: '#0f5bb9',
                            width: 9
                        },
                        type: 'scatter',
                        mode: 'markers',
                    },
                    // {
                    //     x: line,
                    //     y: line,
                    //     name: 'Line',
                    //     line: {
                    //         color: '#deb513',
                    //         width: 1
                    //     },
                    //     type: 'scatter',
                    //     mode: 'lines',
                    // }
                ]}
                layout={viewSettings('Probability Plot', false, {l: 45, r: 30, t: 35, b: 30}, '', '', 0, 'Theoretical Quantiles', 'Ordered Values').layout}
                useResizeHandler={viewSettings().useResizeHandler}
                style={viewSettings().style}
                config={viewSettings().config}
            />
        )

    }

}

const mapStateToProps = ({ probabilityPlotReducer }) => {
    return probabilityPlotReducer;
};

const mapDispatchToProps = {
    fetchProbPlotSuccess,
    fetchProbPlotError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(ProbabilityPlot));