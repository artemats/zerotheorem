import React, { Fragment, lazy, Suspense } from 'react';
const TrendPlot = lazy(() => import("../../components/charts/trendPlot/TrendPlot"));
const ResidualHistogram = lazy(() => import("../../components/charts/residualHistogram/ResudualHistogram"));
const ResidualPlot = lazy(() => import("../../components/charts/residualPlot/ResidualPlot"));
const QqPlot = lazy(() => import("../../components/charts/qqPlot/QqPlot"));
const ProbabilityPlot = lazy(() => import("../../components/charts/probabilityPlot/ProbabilityPlot"));
import CountdownTimer from "../../components/countdownTimer/CountdownTimer";
import LoadingIndicator from "../../components/loadingIndicator/LoadingIndicator";
import ErrorBoundry from "../../components/error-boundry/ErrorBoundry";
import Blockchain from "../../components/charts/blockchain/Blockchain";

const Forecast = () => {

    return(
        <Fragment>
            <section className="section dashboard">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="dashboard-title">
                                <p className="subtitle">Statistics</p>
                                <h1 className="title-1 dashboard-title-item">Baseline Valuation Model</h1>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="dashboard-timer">
                                <p className="subtitle">Time to next update</p>
                                <CountdownTimer />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="dashboard-box">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <TrendPlot />
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="dashboard-box">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <ResidualPlot />
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="dashboard-box">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <ResidualHistogram />
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="dashboard-box">
                                <div className="stat">
                                    <div className="stat-list __middle">
                                        <div className="stat-list-item">
                                            <div className="stat-row">
                                                <p className="stat-label">RMSE:</p>
                                                <div className="stat-value">XX</div>
                                            </div>
                                            <div className="stat-row">
                                                <p className="stat-label">Stationary:</p>
                                                <div className="stat-value">XX</div>
                                            </div>
                                        </div>
                                        <div className="stat-list-item">
                                            <div className="stat-row">
                                                <p className="stat-label">MAPPE:</p>
                                                <div className="stat-value">XX</div>
                                            </div>
                                            <div className="stat-row">
                                                <p className="stat-label">Accuary:</p>
                                                <div className="stat-value">XX</div>
                                            </div>
                                        </div>
                                        <div className="stat-list-item">
                                            <div className="stat-row">
                                                <p className="stat-label">MADS:</p>
                                                <div className="stat-value">XX</div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="hr" />
                                    <div className="stat-list">
                                        <div className="stat-list-item">
                                            <p className="stat-label">Forecasted Price:</p>
                                            <p className="stat-value">$ 8.900 <span className="stat-value-arrow __down" /> </p>
                                        </div>
                                        <div className="stat-list-item">
                                            <p className="stat-label">Forecasted Direction:</p>
                                            <p className="stat-value">Up <span className="stat-value-arrow __up" /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="dashboard-box">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <QqPlot />
                                    </Suspense>
                                </ErrorBoundry>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="dashboard-box">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <ProbabilityPlot />
                                    </Suspense>
                                </ErrorBoundry>
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
                </div>
            </section>
        </Fragment>
    )

};

export default Forecast;