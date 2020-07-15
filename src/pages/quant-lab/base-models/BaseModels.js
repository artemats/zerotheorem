import React, { Fragment, lazy, Suspense } from 'react';
const TrendPlot = lazy(() => import("../../../components/charts/trendPlot/TrendPlot"));
const ResidualHistogram = lazy(() => import("../../../components/charts/residualHistogram/ResudualHistogram"));
const ResidualPlot = lazy(() => import("../../../components/charts/residualPlot/ResidualPlot"));
const QqPlot = lazy(() => import("../../../components/charts/qqPlot/QqPlot"));
const ProbabilityPlot = lazy(() => import("../../../components/charts/probabilityPlot/ProbabilityPlot"));
const MetricBox = lazy(() => import("../../../components/charts/metric-box/MetricBox"));
const Blockchain = lazy(() => import("../../../components/charts/blockchain/Blockchain"));
import CountdownTimer from "../../../components/countdownTimer/CountdownTimer";
import LoadingIndicator from "../../../components/loadingIndicator/LoadingIndicator";
import ErrorBoundry from "../../../components/error-boundry/ErrorBoundry";
import './base-models.scss';

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
                            <Suspense fallback={<LoadingIndicator />}>
                                <Blockchain />
                            </Suspense>
                        </ErrorBoundry>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="dashboard-box __lg">
                        <ErrorBoundry>
                            <Suspense fallback={<LoadingIndicator />}>
                                <Blockchain />
                            </Suspense>
                        </ErrorBoundry>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="dashboard-box __lg">
                        <ErrorBoundry>
                            <Suspense fallback={<LoadingIndicator />}>
                                <Blockchain />
                            </Suspense>
                        </ErrorBoundry>
                    </div>
                </div>
            </div>
            <div className="historical">
                <div className="row">
                    <div className="col-12">
                        <p className="subtitle">Statistics</p>
                        <p className="title-1 __lg">Historical Performance</p>
                        <div className="table-wrap">
                            <div className="table-scroll">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>EOD Forecast Direction</th>
                                            <th>EOD Actual Direction</th>
                                            <th>EOD Forecasted Price:</th>
                                            <th>EOD Actual Prise</th>
                                            <th>Target  reached?</th>
                                            <th>Absolute error</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>07.06.2020</td>
                                            <td><span className="green">Positive</span></td>
                                            <td><span className="green">Positive</span></td>
                                            <td>$ 8.650</td>
                                            <td>$ 8.650</td>
                                            <td><span className="red ttu">No</span></td>
                                            <td>$ 100</td>
                                        </tr>
                                        <tr>
                                            <td>07.06.2020</td>
                                            <td><span className="green">Positive</span></td>
                                            <td><span className="green">Positive</span></td>
                                            <td>$ 8.650</td>
                                            <td>$ 8.650</td>
                                            <td><span className="green ttu">Yes</span></td>
                                            <td>$ 100</td>
                                        </tr>
                                        <tr>
                                            <td>07.06.2020</td>
                                            <td><span className="red">Negative</span></td>
                                            <td><span className="red">Negative</span></td>
                                            <td>$ 8.650</td>
                                            <td>$ 8.650</td>
                                            <td><span className="red ttu">No</span></td>
                                            <td>$ 100</td>
                                        </tr>
                                        <tr>
                                            <td>07.06.2020</td>
                                            <td><span className="red">Negative</span></td>
                                            <td><span className="red">Negative</span></td>
                                            <td>$ 8.650</td>
                                            <td>$ 8.650</td>
                                            <td><span className="green ttu">Yes</span></td>
                                            <td>$ 100</td>
                                        </tr>
                                        <tr>
                                            <td>07.06.2020</td>
                                            <td><span className="green">Positive</span></td>
                                            <td><span className="green">Positive</span></td>
                                            <td>$ 8.650</td>
                                            <td>$ 8.650</td>
                                            <td><span className="red ttu">No</span></td>
                                            <td>$ 100</td>
                                        </tr>
                                        <tr>
                                            <td>07.06.2020</td>
                                            <td><span className="red">Negative</span></td>
                                            <td><span className="red">Negative</span></td>
                                            <td>$ 8.650</td>
                                            <td>$ 8.650</td>
                                            <td><span className="red ttu">No</span></td>
                                            <td>$ 100</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="btns">
                                <a href="#" className="btn lg __border">
                                    <span className="btn-title">Go to Back Testing</span>
                                </a>
                                <a href="#" className="btn lg">
                                    <span className="btn-title">Want More?</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

};

export default BaseModels;