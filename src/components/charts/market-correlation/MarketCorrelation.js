import React, { Component, Fragment } from 'react';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import DateFilter from "../../date-filter/DateFilter";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";

const xValues = ['ETH', 'LTC', 'XRP', 'BCH', 'EOS', 'XLM', 'XMR2', 'ADA', 'XMR', 'DASH'];
const yValues = ['DASH', 'XMR', 'ADA', 'XMR2', 'XLM', 'EOS', 'BCH', 'XRP', 'LTC', 'ETH'];
const zValues = [
    [0, 0, 0.8, 0.4, 0.8, 0.4, 1, 0.4, 0.2, 1],
    [0.4, 0.8, 0, 0.2, 0.4, 0.2, 0.8, 1, 1, 0.8],
    [0.2, 0.8, 0.8, 0.6, 1, 0, 0.2, 1, 0.2, 0.2],
    [0.4, 1, 0.4, 1, 0, 0.2, 1, 0.8, 0, 1],
    [0.2, 0.6, 1, 0.2, 0.4, 1, 0, 0.4, 0.8, 0.4],
    [0.2, 1, 0.4, 0.2, 1, 0, 0.6, 1, 0.4, 0.2],
    [0.8, 0.4, 1, 1, 0.2, 0.4, 0.8, 0, 1, 0.6],
    [0, 0.8, 1, 0.2, 0, 1, 0.8, 0.2, 0.6, 0.2],
    [0, 1, 0, 0.8, 0.2, 0.4, 1, 0.6, 0.2, 0.2],
    [1, 0.8, 0.8, 0.8, 0.8, 1, 0.4, 1, 0.8, 1]
];
const annotations = [];

class MarketCorrelation extends Component{

    componentDidMount() {
        for (let i = 0; i < yValues.length; i++) {
            for (let j = 0; j < xValues.length; j++) {
                let result = {
                    x: xValues[j],
                    y: yValues[i],
                    text: zValues[i][j],
                    font: {
                        size: 12,
                        color: 'rgb(255,255,255)'
                    },
                    showarrow: false,
                };
                annotations.push(result);
            }
        }
    }

    render() {
        return(
            <Fragment>
                <Plot
                    data={[
                        {
                            z: zValues,
                            x: xValues,
                            y: yValues,
                            colorscale: [
                                ['0.0', 'rgb(255,198,0)'],
                                ['0.2', 'rgb(207,176,36)'],
                                ['0.4', 'rgb(158,153,72)'],
                                ['0.6', 'rgb(111,132,108)'],
                                ['0.8', 'rgb(63,110,143)'],
                                ['1.0', 'rgb(15,88,179)']
                            ],
                            type: 'heatmap'
                        }
                    ]}
                    layout={viewSettingsLayout('market Correlation Matrix', true, {l: 40, r: 30, t: 95, b: 30}, '', '', 0.5, '', '', 'group', '', true, true, annotations).layout}
                    useResizeHandler={viewSettingsLayout().useResizeHandler}
                    style={viewSettingsLayout().style}
                    config={viewSettingsConfig(true).config}
                />
                <DateFilter />
            </Fragment>
        )
    }

}

export default MarketCorrelation;