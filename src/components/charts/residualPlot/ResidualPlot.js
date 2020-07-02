import React, { Component } from 'react';
import WithApiService from '../../hoc/WithApiService';
import { connect } from 'react-redux';
import { fetchResidualPlotSuccess, fetchResidualPlotError } from '../../../store/charts/residualPlot/actions';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettings} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";

class ResidualPlot extends Component {

    componentDidMount() {

        const { api, fetchResidualPlotSuccess, fetchResidualPlotError, data } = this.props;

        if(isEmpty(data)) {
            api.getResidual()
                .then(resData => {
                    fetchResidualPlotSuccess(resData);
                })
                .catch(error => fetchResidualPlotError(error));
        }

    }

    render() {

        const { isLoading, data: { date, residual } } = this.props;

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

const mapStateToProps = ({ residualPlotReducer }) => {
    return residualPlotReducer;
};

const mapDispatchToProps = {
    fetchResidualPlotSuccess,
    fetchResidualPlotError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(ResidualPlot));