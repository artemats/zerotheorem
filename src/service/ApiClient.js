import {_baseURI} from "../apiSettings";

export default class ApiClient {

    async getSources(url) {

        const response = await  fetch(`${_baseURI}/api${url}`, {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Authorization': 'Token b962c604470dd3c484f245810b57098026fffa21',
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

        // return await this.getSources('/trend')
        return await this.getSources('/residual-histogram')

    }

}
