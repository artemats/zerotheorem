import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDashboardPageSuccess } from '../../../store/quant-nav/actions';
import thumb from '../../../assets/images/icons/forecast-2.svg';
import LoadingIndicator from "../../../components/loadingIndicator/LoadingIndicator";
import ErrorBoundry from "../../../components/error-boundry/ErrorBoundry";
import TrendPlot from "../../../components/charts/trendPlot/TrendPlot";

class Forecast extends Component {

    state = {
        icon: thumb,
        title: 'Zt - Forecast'
    };

    componentDidMount() {
        const { loadDashboardPageSuccess } = this.props;
        loadDashboardPageSuccess(this.state);
    }

    render() {

        return(
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="dashboard-box __lg">
                                <ErrorBoundry>
                                    <TrendPlot />
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="dashboard-box">
                                {/*<ErrorBoundry>*/}
                                {/*    <Suspense fallback={<LoadingIndicator />}>*/}
                                {/*        <ResidualPlot />*/}
                                {/*    </Suspense>*/}
                                {/*</ErrorBoundry>*/}
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="dashboard-box __stat">
                                {/*<ErrorBoundry>*/}
                                {/*    <Suspense fallback={<LoadingIndicator />}>*/}
                                {/*        <MetricBox />*/}
                                {/*    </Suspense>*/}
                                {/*</ErrorBoundry>*/}
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="dashboard-box __mt">
                                {/*<ErrorBoundry>*/}
                                {/*    <Suspense fallback={<LoadingIndicator />}>*/}
                                {/*        <ResidualHistogram />*/}
                                {/*    </Suspense>*/}
                                {/*</ErrorBoundry>*/}
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="dashboard-box __sm">
                                {/*<ErrorBoundry>*/}
                                {/*    <Suspense fallback={<LoadingIndicator />}>*/}
                                {/*        <QqPlot />*/}
                                {/*    </Suspense>*/}
                                {/*</ErrorBoundry>*/}
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="dashboard-box __sm">
                                {/*<ErrorBoundry>*/}
                                {/*    <Suspense fallback={<LoadingIndicator />}>*/}
                                {/*        <ProbabilityPlot />*/}
                                {/*    </Suspense>*/}
                                {/*</ErrorBoundry>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    loadDashboardPageSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);