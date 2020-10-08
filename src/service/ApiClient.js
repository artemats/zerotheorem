import TransformData from "./TransformData";

const _baseURI = process.env.REACT_APP_API_URL;
const _token = process.env.REACT_APP_API_TOKEN;
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class ApiClient {

    async getSources(url) {

        const response = await  fetch(`${_baseURI}/api${url}`, {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Authorization': `Token ${_token}`,
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok) {
            throw new Error(`Could don't fetch ${url} received ${response.status}`);
        }

        return await response.json();

    }

    getTrend = async (startFrom, finishedTo) => {
        const data = await this.getSources(`/trend?start_date=${startFrom}`);
        return TransformData.trend(data);
    };

    getResidual = async (startFrom, finishedTo) => {
        const data = await this.getSources(`/residual?start_date=${startFrom}`);
        return this._transformResidualData(data);

    };

    getResidualHistogram = async () => {
        const data = await this.getSources('/residual-histogram');
        return this._transformResidualHisData(data);

    };

    getQqPlot = async () => {
        const data = await this.getSources('/qqplot');
        return this._transformQqPlotData(data);
    };

    getProbPlot = async () => {
        const data = await this.getSources('/ppplot');
        return this._transformProbabilityData(data);
    };

    getMetric = async () => {
        return await this.getSources('/metricbox');
    };

    // _transformTrendData = (trendData) => {
    //     const data = {
    //         date: [],
    //         prediction: [],
    //         rmse: [],
    //         upper_band: [],
    //         lower_band: []
    //     };
    //     trendData.data.map(point => {
    //         data.date.push(point.date);
    //         data.prediction.push(point.prediction);
    //         data.rmse.push(point.rmse);
    //         data.upper_band.push(point.upper_band);
    //         data.lower_band.push(point.lower_band);
    //     });
    //     return data;
    // };

    _transformResidualData = (resData) => {
        const data = {
            date: [],
            residual: []
        };
        resData.data.map(point => {
            data.date.push(point.date);
            data.residual.push(point.residual);
        });
        return data;
    };

    _transformResidualHisData = (resHisData) => {
        return {
            bins: resHisData.data.bins,
            frecuencies: resHisData.data.frecuencies
        };
    };

    _transformQqPlotData = (qqPlotData) => {
        return {
            z_actual: qqPlotData.data.z_actual,
            z_theorical: qqPlotData.data.z_theorical,
            line: qqPlotData.line
        }
    };

    _transformProbabilityData = (probData) => {
        return {
            prob_theorical: probData.data.prob_theorical,
            prob_actual: probData.data.prob_actual,
            line: probData.line
        }
    }

}
