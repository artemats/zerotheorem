import React, { Component } from 'react';
import WithApiService from '../../hoc/WithApiService';
import Plot from "react-plotly.js";
import {viewSettings} from "../ChartViewSettins";

class Blockchain extends Component {

    state = {
        isLoading: true,
        data: [],
        captions: []
    };

    componentDidMount() {

        // const { api } = this.props;

        // fetch('https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/mocks/gl3d_scatter-color-array.json')
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then(data => {
        //         // console.log(data.data);
        //     })
        //     .catch(error => console.error(error));

    }

    render() {

        return(
            <Plot
                data={[
                    {
                        mode: 'markers',
                        type: 'scatter3d',
                        name: 'PC1',
                        x: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6],
                        y: [11, 10, 9, 7, 5, 6, 4, 2, 3, 1, 3],
                        z: [4, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4],
                        marker: {
                            color: '#0f5bb9',
                            size: 12,
                            cauto: true
                        }
                    },
                    {
                        mode: 'markers',
                        type: 'scatter3d',
                        name: 'PC2',
                        x: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6],
                        y: [7, 5, 6, 4, 2, 3, 1, 3, -1, -4, -2],
                        z: [2, 3, 4, 5, 4, 3, 2, 1, 0, -1, -2],
                        marker: {
                            color: '#b1de13',
                            size: 12,
                            cauto: true
                        }
                    },
                    {
                        mode: 'markers',
                        type: 'scatter3d',
                        name: 'PC3',
                        x: [-1, -2, -4, -3, 0, 3, 1, 4, 6, 2, 1],
                        y: [10, 2, 4, 3, 1, 2, 5, 2, -2, -1, -5],
                        z: [3, 4, 2, 6, 3, 2, 1, 0, -2, -3, -5],
                        marker: {
                            color: '#259c4f',
                            size: 12,
                            cauto: true
                        }
                    }
                ]}
                layout={viewSettings('Blockchain', false, {l: 0, r: 0, t: 50, b: 0}, '', '', 0, '', '').layout}
                useResizeHandler={viewSettings().useResizeHandler}
                style={viewSettings().style}
                config={viewSettings().config}
            />
        )

    }

}

export default WithApiService()(Blockchain);