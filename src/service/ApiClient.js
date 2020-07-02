import {_baseURI, _token} from "../apiSettings";

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
            // throw new Error(`Could don't fetch ${url} received ${response.status}`);
            return response.status;
        }

        return await response.json();

    }

    getTrend = async () => {
        const data = await this.getSources('/trend');
        return this._transformTrendData(data);

    };

    getResidual = async () => {
        const data = await this.getSources('/residual');
        return this._transformResidualData(data);

    };

    getResidualHistogram = async () => {
        const data = await this.getSources('/residual-histogram');
        return this._transformResidualHisData(data);

    };

    getBlockchain = async () => {

        // console.log(`${_baseURI}/api/qqplot`);
        // return await this.getSources('/3D-1');
        return await this.getSources('/qqplot');
        // return await this.getSources('/ppplot');

    };

    _transformTrendData = (trendData) => {
        const data = {
            date: [],
            prediction: [],
            rmse: [],
            upper_band: [],
            lower_band: []
        };
        trendData.data.map(point => {
            data.date.push(point.date);
            data.prediction.push(point.prediction);
            data.rmse.push(point.rmse);
            data.upper_band.push(point.upper_band);
            data.lower_band.push(point.lower_band);
        });
        return data;
    };

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

}
