import React, { Component } from 'react';
import WithApiService from '../../hoc/WithApiService';
import ThreeDPlot from "../3D-plot/ThreeDPlot";

class Blockchain extends Component {

    state = {
        isLoading: true,
        data: [],
        captions: []
    };

    componentDidMount() {

        const { api } = this.props;

        api.getBlockchain()
            .then(data => console.log(data));

    }

    render() {

        return(
            <ThreeDPlot data={1} captions={1} />
        )

    }

}

export default WithApiService()(Blockchain);