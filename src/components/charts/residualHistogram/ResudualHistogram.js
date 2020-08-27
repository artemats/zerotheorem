import React, { Component, Fragment } from 'react';
import WithApiService from '../../hoc/WithApiService';
import { connect } from 'react-redux';
import { fetchResidualHisSuccess, fetchResidualHisError } from '../../../store/charts/residualHistogram/actions';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import LoadingIndicator from "../../loadingIndicator/LoadingIndicator";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import {isEmpty} from "../../globalFunctions/globalFunctions";

class ResidualHistogram extends Component {

    componentDidMount() {
        const { api, fetchResidualHisSuccess, fetchResidualHisError, data } = this.props;
        if(isEmpty(data)) {
            api.getResidualHistogram()
                .then(resHisData => {
                    fetchResidualHisSuccess(resHisData);
                    console.log(resHisData);
                })
                .catch(error => fetchResidualHisError(error));
        }
    }

    render() {
        const { isLoading, data: { bins, frecuencies }  } = this.props;
        if(isLoading) {
            return <LoadingIndicator />
        }
        return(
            <Fragment>
                <Plot
                    data={[
                        {
                            type: 'bar',
                            x: bins,
                            y: frecuencies,
                            marker: {
                                color: '#a78814',
                            }
                        }
                    ]}
                    layout={viewSettingsLayout('Residual Histogram', false, {l: 30, r: 30, t: 95, b: 30} ).layout}
                    useResizeHandler={viewSettingsLayout().useResizeHandler}
                    style={viewSettingsLayout().style}
                    config={viewSettingsConfig().config}
                />
            </Fragment>
        )
    }
}

const mapStateToProps = ({ residualHisReducer }) => {
    return residualHisReducer;
};

const mapDispatchToProps = {
    fetchResidualHisSuccess,
    fetchResidualHisError
};

export default WithApiService()(connect(mapStateToProps, mapDispatchToProps)(ResidualHistogram));