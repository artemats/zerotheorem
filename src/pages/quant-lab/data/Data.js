import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadDashboardPageSuccess } from "../../../store/quant-nav/actions";
import thumb from "../../../assets/images/icons/data.svg";
import DataBanner from "../../../components/data-banner/DataBanner";
import DataDownloads from "../../../components/data-downloads/DataDownloads";

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
                            <div className="data-view-content">
                                <p className="data-view-subtitle semi-bold">In Order To Download Our Historical Data</p>
                                <p className="data-view-title regular">Please Fill Out Our Feedback Form</p>
                                <button className="btn sm">
                                    <span className="btn-title">Get Start</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <DataDownloads />
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