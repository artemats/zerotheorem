import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import './quant-lab.scss';
import QuantNav from "./quant-nav/QuantNav";
import BaseModels from "./base-models/BaseModels";
import Forecast from "./forecast/Forecast";
import QuantHeader from "./quant-header/QuantHeader";
import StylizedAttributes from "./stylized-attributes/StylizedAttributes";
import FeatureExploration from "./feature-exploration/FeatureExploration";

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
                        <QuantHeader />
                        <Switch>
                            <Route exact path={`${path}`}>
                                <Redirect to={`${path}/${navData[0].pathName}`} />
                            </Route>
                            <Route path={`${path}/${navData[0].pathName}`}>
                                <Forecast />
                            </Route>
                            <Route path={`${path}/${navData[1].pathName}`}>
                                <BaseModels />
                            </Route>
                            <Route path={`${path}/${navData[2].pathName}`}>
                                <StylizedAttributes />
                            </Route>
                            <Route path={`${path}/${navData[3].pathName}`}>
                                <FeatureExploration />
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