import React, {Component, Fragment, lazy, Suspense} from 'react';
import { connect } from 'react-redux';
import { loadDashboardPageSuccess } from '../../../store/quant-nav/actions';
import thumb from "../../../assets/images/icons/baseline-model.svg";
import './base-models.scss';
import LoadingIndicator from "../../../components/loadingIndicator/LoadingIndicator";
import ErrorBoundry from "../../../components/error-boundry/ErrorBoundry";
const StackDistribution = lazy(() => import("../../../components/charts/stackDistribution/StackDistribution"));
const BaselineModel2 = lazy(() => import("../../../components/charts/baseline-model-2/BaselineModel2"));

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
                            <div className="col-xl-6">
                                <div className="dashboard-box __sm">
                                    <ErrorBoundry>
                                        <Suspense fallback={<LoadingIndicator />}>
                                            <StackDistribution />
                                        </Suspense>
                                    </ErrorBoundry>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="dashboard-box __sm">
                                    <ErrorBoundry>
                                        <Suspense fallback={<LoadingIndicator />}>
                                            <BaselineModel2 />
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