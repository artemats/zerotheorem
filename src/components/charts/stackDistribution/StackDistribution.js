import React, { Component } from 'react';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettingsConfig, viewSettingsLayout} from "../ChartViewSettins";

class StackDistribution extends Component {

    render() {

        return (
            <Plot
                data={[
                    {
                        type: 'sunburst',
                        labels: ["MNT", "MNT", "XFG", "NFS"],
                        parents: ["", "", "", ""],
                        values: [2, 4, 5, 3]
                    }
                ]}
                layout={viewSettingsLayout('Stack Distribution', false, {l: 30, r: 30, t: 30, b: 30}, '', '', 0, '').layout}
                useResizeHandler={viewSettingsLayout().useResizeHandler}
                style={viewSettingsLayout().style}
                config={viewSettingsConfig().config}
            />
        )

    }

}

export default StackDistribution;