import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadDashboardPageSuccess } from "../../../store/quant-nav/actions";
import thumb from "../../../assets/images/icons/data.svg";
import DataBanner from "../../../components/data-banner/DataBanner";

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
            <div className="data">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="data-view">

                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="data-list">
                            <div className="data-list-item">

                            </div>
                            <div className="data-list-item">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <DataBanner />
                    </div>
                </div>
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