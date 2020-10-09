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
        return TransformData.residualPlot(data);

    };

    getResidualHistogram = async () => {
        const data = await this.getSources('/residual-histogram');
        return TransformData.residualHistogram(data);

    };

    getQqPlot = async () => {
        const data = await this.getSources('/qqplot');
        return TransformData.qqPlot(data);
    };

    getProbPlot = async () => {
        const data = await this.getSources('/ppplot');
        return TransformData.probabilityPlot(data);
    };

    getMetric = async () => {
        return await this.getSources('/metricbox');
    };

}
