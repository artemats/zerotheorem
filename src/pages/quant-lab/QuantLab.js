import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import './quant-lab.scss';
import QuantNav from "./quant-nav/QuantNav";
import BaseModels from "./base-models/BaseModels";
import CountdownTimer from "../../components/countdownTimer/CountdownTimer";
import thumb from '../../assets/images/icons/forecast-2.svg';
import dashPreview from '../../assets/images/quant-lab-abstract.png';

const QuantLab = ({ navData }) => {

    const { path, url } = useRouteMatch();

    return(
        <section className="section quant-lab-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="hero-nav">
                            <QuantNav url={url} />
                        </div>
                    </div>
                    <div className="col-xl-10">
                        <div className="quant-header">
                            <div className="quant-header-title">
                                <img src={thumb} alt="Zt - Forecast" className="quant-header-icon" />
                                <h1 className="title-1 __dashboard">Zt - Forecast</h1>
                            </div>
                            <div className="quant-header-timer">
                                <CountdownTimer />
                            </div>
                            <div className="quant-header-preview">
                                <img src={dashPreview} alt="" />
                            </div>
                        </div>
                        <Switch>
                            <Route exact path={`${path}`}>
                                <Redirect to={`${path}/${navData[0].pathName}`} />
                            </Route>
                            <Route path={`${path}/${navData[0].pathName}`}>
                                <h2>Zt - forecast</h2>
                            </Route>
                            <Route path={`${path}/${navData[1].pathName}`}>
                                <BaseModels />
                            </Route>
                            <Route path={`${path}/${navData[2].pathName}`}>
                                <h2>Stylized Attributes</h2>
                            </Route>
                            <Route path={`${path}/${navData[3].pathName}`}>
                                <h2>Feature Exploration</h2>
                            </Route>
                            <Route path={`${path}/${navData[4].pathName}`}>
                                <h2>Market Metrics</h2>
                            </Route>
                            <Route path={`${path}/${navData[5].pathName}`}>
                                <h2>Global Correlations</h2>
                            </Route>
                            <Route path={`${path}/${navData[6].pathName}`}>
                                <h2>Data</h2>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </section>
    )

};

const mapStateToProps = ({ quantNavReducer }) => {
  return quantNavReducer;
};

export default connect(mapStateToProps)(QuantLab);