import React, { Component } from 'react';
import Plot from '../../../../node_modules/react-plotly.js/react-plotly';
import {viewSettings} from "../ChartViewSettins";

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
                layout={viewSettings('Stack Distribution', false, {l: 30, r: 30, t: 30, b: 30}, '', '', 0, '').layout}
                useResizeHandler={viewSettings().useResizeHandler}
                style={viewSettings().style}
                config={viewSettings().config}
            />
        )

    }

}

export default StackDistribution;