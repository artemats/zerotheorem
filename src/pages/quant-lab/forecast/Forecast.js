import React, { Component, Fragment, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { loadDashboardPageSuccess } from '../../../store/quant-nav/actions';
import thumb from '../../../assets/images/icons/forecast-2.svg';
import LoadingIndicator from "../../../components/loadingIndicator/LoadingIndicator";
import ErrorBoundry from "../../../components/error-boundry/ErrorBoundry";
const ProbabilityPlot = lazy(() => import("../../../components/charts/probabilityPlot/ProbabilityPlot"));
const QqPlot = lazy(() => import("../../../components/charts/qqPlot/QqPlot"));
const ResidualHistogram = lazy(() => import("../../../components/charts/residualHistogram/ResudualHistogram"));
const MetricBox = lazy(() => import("../../../components/charts/metric-box/MetricBox"));
const ResidualPlot = lazy(() => import("../../../components/charts/residualPlot/ResidualPlot"));
const TrendPlot = lazy(() => import("../../../components/charts/trendPlot/TrendPlot"));

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
            <Fragment>
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-xl-7">
                                <div className="dashboard-box __lg">
                                    <ErrorBoundry>
                                        <Suspense fallback={<LoadingIndicator />}>
                                            <TrendPlot />
                                        </Suspense>
                                    </ErrorBoundry>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="dashboard-box">
                                    <ErrorBoundry>
                                        <Suspense fallback={<LoadingIndicator />}>
                                            <ResidualPlot />
                                        </Suspense>
                                    </ErrorBoundry>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="dashboard-box __stat">
                                    <ErrorBoundry>
                                        <Suspense fallback={<LoadingIndicator />}>
                                            <MetricBox />
                                        </Suspense>
                                    </ErrorBoundry>
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="dashboard-box __mt">
                                    <ErrorBoundry>
                                        <Suspense fallback={<LoadingIndicator />}>
                                            <ResidualHistogram />
                                        </Suspense>
                                    </ErrorBoundry>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="dashboard-box __sm">
                                    <ErrorBoundry>
                                        <Suspense fallback={<LoadingIndicator />}>
                                            <QqPlot />
                                        </Suspense>
                                    </ErrorBoundry>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="dashboard-box __sm">
                                    <ErrorBoundry>
                                        <Suspense fallback={<LoadingIndicator />}>
                                            <ProbabilityPlot />
                                        </Suspense>
                                    </ErrorBoundry>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
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