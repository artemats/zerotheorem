import React, {Fragment, lazy, Suspense} from 'react';
const StackDistribution = lazy(() => import("../../../components/charts/stackDistribution/StackDistribution"));
import ErrorBoundry from "../../../components/error-boundry/ErrorBoundry";
import LoadingIndicator from "../../../components/loadingIndicator/LoadingIndicator";

const SatoshiStack = () => {

    return(
        <Fragment>
            <div className="row">
                <div className="col-lg-9 offset-lg-3">
                    <div className="dashboard-filter">
                        <p className="subtitle">Select period:</p>
                        <div className="filter">
                            <button className="filter-link link active">Day</button>
                            <button className="filter-link link">Week</button>
                            <button className="filter-link link">Month</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-9 offset-lg-3">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="dashboard-box">
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="dashboard-box">
                                <ErrorBoundry>
                                    <Suspense fallback={<LoadingIndicator />}>
                                        <StackDistribution />
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
        </Fragment>
    )

};

export default SatoshiStack;