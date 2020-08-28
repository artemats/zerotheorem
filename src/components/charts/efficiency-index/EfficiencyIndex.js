import React, { Component, Fragment } from 'react';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";
import DateFilter from "../../date-filter/DateFilter";

class EfficiencyIndex extends Component{

    render() {
        return(
            <Fragment>
                <Plot
                    data={[
                        {
                            type: 'bar',
                            name: 'Lorem',
                            x: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                            y: [0.1, 0.3, 1, 1.5, 2, 1.5, 1.3, 1.8, 1.2, 0.5, 0.2],
                            marker: {
                                color: '#0F58B3',
                            }
                        },
                        {
                            mode: 'lines',
                            name: 'Ipsum',
                            x: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                            y: [0.1, 0.3, 1, 1.5, 2, 1.5, 1.3, 1.8, 1.2, 0.5, 0.2],
                            line: {
                                color: '#FFC600',
                                width: 2,
                                dash: 'solid'
                            }
                        }
                    ]}
                    layout={viewSettingsLayout('Efficiency Index', true, {l: 40, r: 30, t: 95, b: 30}, '', '', 0.5, '', '', 'group', '', true, true).layout}
                    useResizeHandler={viewSettingsLayout().useResizeHandler}
                    style={viewSettingsLayout().style}
                    config={viewSettingsConfig(true).config}
                />
                <DateFilter />
            </Fragment>
        )
    }

}

export default EfficiencyIndex;

