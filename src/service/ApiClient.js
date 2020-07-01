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

        return await this.getSources('/trend');

    };

    getResidual = async () => {

        return await this.getSources('/residual');

    };

    getResidualHistogram = async () => {

        return await this.getSources('/residual-histogram');

    };

    getBlockchain = async () => {

        // return await this.getSources('/3D-1');
        return await this.getSources('/qqplot');

    };

}
