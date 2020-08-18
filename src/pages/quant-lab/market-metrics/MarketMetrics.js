import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadDashboardPageSuccess } from "../../../store/quant-nav/actions";
import thumb from "../../../assets/images/icons/market-metrics.svg";

class MarketMetrics extends Component {

    state = {
        icon: thumb,
        title: 'Market Metrics'
    };

    componentDidMount() {
        const { loadDashboardPageSuccess } = this.props;
        loadDashboardPageSuccess(this.state);
    }

    render() {
        return(
            <div>
                <h1 className="title-1">Market Metrics</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(MarketMetrics);