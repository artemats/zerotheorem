import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadDashboardPageSuccess } from "../../../store/quant-nav/actions";
import thumb from "../../../assets/images/icons/data.svg";

class Data extends Component {

    state = {
        icon: thumb,
        title: 'Data'
    };

    componentDidMount() {
        const { loadDashboardPageSuccess } = this.props;
        loadDashboardPageSuccess(this.state);
    }

    render() {
        return(
            <div>
                <h1 className="title-1">Data</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Data);