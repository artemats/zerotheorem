import React, { Component, Fragment } from 'react';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import DateFilter from "../../date-filter/DateFilter";
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";

class MarketCorrelation extends Component{

    render() {
        return(
            <Fragment>
                <Plot
                    data={[
                        {
                            z: [
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
                            ],
                            x: ['ETH', 'LTC', 'XRP', 'BCH', 'EOS', 'XLM', 'XMR', 'ADA', 'XMR', 'DASH'],
                            y: ['DASH', 'XMR', 'ADA', 'XMR', 'XLM', 'EOS', 'BCH', 'XRP', 'LTC', 'ETH'],
                            showarrow: true,
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
                    layout={viewSettingsLayout('market Correlation Matrix', true, {l: 40, r: 30, t: 95, b: 30}, '', '', 0.5, '', '', 'group', '', true, true).layout}
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