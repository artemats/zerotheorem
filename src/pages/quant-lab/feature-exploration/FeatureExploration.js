import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadDashboardPageSuccess } from '../../../store/quant-nav/actions';
import thumb from '../../../assets/images/icons/feature-exploration.svg';

class FeatureExploration extends Component {

    state = {
        icon: thumb,
        title: 'Feature Exploration'
    };

    componentDidMount() {
        const { loadDashboardPageSuccess } = this.props;
        loadDashboardPageSuccess(this.state);
    }

    render() {

        return(
            <div>
                <h1>Feature Exploration</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(FeatureExploration);