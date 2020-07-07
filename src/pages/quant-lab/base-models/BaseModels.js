import React, { Fragment, lazy, Suspense } from 'react';
const TrendPlot = lazy(() => import("../../../components/charts/trendPlot/TrendPlot"));
const ResidualHistogram = lazy(() => import("../../../components/charts/residualHistogram/ResudualHistogram"));
const ResidualPlot = lazy(() => import("../../../components/charts/residualPlot/ResidualPlot"));
const QqPlot = lazy(() => import("../../../components/charts/qqPlot/QqPlot"));
const ProbabilityPlot = lazy(() => import("../../../components/charts/probabilityPlot/ProbabilityPlot"));
const MetricBox = lazy(() => import("../../../components/charts/metric-box/MetricBox"));
import CountdownTimer from "../../../components/countdownTimer/CountdownTimer";
import LoadingIndicator from "../../../components/loadingIndicator/LoadingIndicator";
import ErrorBoundry from "../../../components/error-boundry/ErrorBoundry";
import Blockchain from "../../../components/charts/blockchain/Blockchain";

const BaseModels = () => {

    return(
        <Fragment>
            <div className="row">
                <div className="col-lg-9 offset-lg-3">
                    <div className="dashboard-timer">
                        <p className="subtitle">Time to next update</p>
                        <CountdownTimer />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-9 offset-lg-3">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="dashboard-box">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <TrendPlot />
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="dashboard-box">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <ResidualPlot />
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="dashboard-box __stat">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <MetricBox />
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="dashboard-box">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <ResidualHistogram />
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="dashboard-box">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <ProbabilityPlot />
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="dashboard-box">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <QqPlot />
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="dashboard-box">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4">
                    <div className="dashboard-box __lg">
                        <ErrorBoundry>
                            <Blockchain />
                        </ErrorBoundry>
                    </div>
                </div>
            </div>
        </Fragment>
    )

};

export default BaseModels;