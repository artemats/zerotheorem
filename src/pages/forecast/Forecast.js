import React, { Fragment, lazy, Suspense } from 'react';
const ResidualHistogram = lazy(() => import("../../components/residualHistogram/ResudualHistogram"));
import CountdownTimer from "../../components/countdownTimer/CountdownTimer";
import LoadingIndicator from "../../components/loadingIndicator/LoadingIndicator";

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

                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="dashboard-box">

                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="dashboard-box">
                                <Suspense fallback={<LoadingIndicator />}>
                                    <ResidualHistogram />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )

};

export default Forecast;