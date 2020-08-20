import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            <div>Baseline models</div>
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