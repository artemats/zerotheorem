import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import './quant-lab.scss';
import QuantNav from "./quant-nav/QuantNav";
import BaseModels from "./base-models/BaseModels";
import SatoshiStack from "./satoshi-stack/SatoshiStack";

const QuantLab = () => {

    const { path, url } = useRouteMatch();

    return(
        <section className="section quant-lab-page">
            <div className="quant-tags">
                <div className="quant-tags-list">
                    <p className="quant-tag" style={{ color: '#e26161' }}>SNP500/BTC [xx]</p>
                    <p className="quant-tag" style={{ color: '#229b39' }}>DAX/BTC [xx]</p>
                    <p className="quant-tag" style={{ color: '#e26161' }}>SNP500/BTC [xx]</p>
                    <p className="quant-tag" style={{ color: '#229b39' }}>DAX/BTC [xx]</p>
                    <p className="quant-tag" style={{ color: '#e26161' }}>SNP500/BTC [xx]</p>
                    <p className="quant-tag" style={{ color: '#229b39' }}>DAX/BTC [xx]</p>
                    <p className="quant-tag" style={{ color: '#e26161' }}>SNP500/BTC [xx]</p>
                    <p className="quant-tag" style={{ color: '#229b39' }}>DAX/BTC [xx]</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero-nav">
                            <div className="hero-title">
                                <p className="subtitle">statistics</p>
                                <h1 className="title-1">quant lab</h1>
                            </div>
                            <QuantNav url={url} />
                        </div>
                    </div>
                    <div className="col-12">
                        <Switch>
                            <Route exact path={`${path}`}>
                                <Redirect to={`${path}/base-models`} />
                            </Route>
                            <Route path={`${path}/satoshi-stack`}>
                                <SatoshiStack />
                            </Route>
                            <Route path={`${path}/base-models`}>
                                <BaseModels />
                            </Route>
                            <Route path={`${path}/market-analysis`}>
                                <h2>Market analysis</h2>
                            </Route>
                            <Route path={`${path}/macro-indicators`}>
                                <h2>Macro indicators</h2>
                            </Route>
                            <Route path={`${path}/evaluation`}>
                                <h2>Evaluation</h2>
                            </Route>
                            <Route path={`${path}/library`}>
                                <h2>Library</h2>
                            </Route>
                            <Route path={`${path}/data`}>
                                <h2>Data</h2>
                            </Route>
                            <Route path={`${path}/monthly-votes`}>
                                <h2>Monthly votes</h2>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default QuantLab;