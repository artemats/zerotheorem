import React, { Fragment, lazy, Suspense, Component } from 'react';
import { connect } from 'react-redux';
const TrendPlot = lazy(() => import("../../../components/charts/trendPlot/TrendPlot"));
const ResidualHistogram = lazy(() => import("../../../components/charts/residualHistogram/ResudualHistogram"));
const ResidualPlot = lazy(() => import("../../../components/charts/residualPlot/ResidualPlot"));
const QqPlot = lazy(() => import("../../../components/charts/qqPlot/QqPlot"));
const ProbabilityPlot = lazy(() => import("../../../components/charts/probabilityPlot/ProbabilityPlot"));
const MetricBox = lazy(() => import("../../../components/charts/metric-box/MetricBox"));
import LoadingIndicator from "../../../components/loadingIndicator/LoadingIndicator";
import ErrorBoundry from "../../../components/error-boundry/ErrorBoundry";
import { loadDashboardPageSuccess } from '../../../store/quant-nav/actions';
import thumb from "../../../assets/images/icons/baseline-model.svg";
import './base-models.scss';

class BaseModels extends Component {

    state = {
        icon: thumb,
        title: 'Baseline Model'
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
                                <div className="dashboard-box">
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
                                <div className="dashboard-box">
                                    <ErrorBoundry>
                                        <Suspense fallback={<LoadingIndicator />}>
                                            <ResidualHistogram />
                                        </Suspense>
                                    </ErrorBoundry>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="dashboard-box">
                                    <ErrorBoundry>
                                        <Suspense fallback={<LoadingIndicator />}>
                                            <ProbabilityPlot />
                                        </Suspense>
                                    </ErrorBoundry>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="dashboard-box">
                                    <ErrorBoundry>
                                        <Suspense fallback={<LoadingIndicator />}>
                                            <QqPlot />
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

export default connect(mapStateToProps, mapDispatchToProps)(BaseModels);