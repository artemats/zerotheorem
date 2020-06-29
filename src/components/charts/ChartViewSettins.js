const initialMargin = {l: 30, r: 30, t: 80, b: 30};

export const viewSettings = (chartTitle, showLegend, margin = initialMargin, xTickFormat, yTickFormat, bargap = 3) => {
    return {
        layout: {
            width: null,
            height: null,
            font: {
                family: 'Rubik'
            },
            title: {
                text: chartTitle,
                x: 0.5,
                y: 0.95,
                font: {
                    size: 14,
                    color: '#ffffff',
                    family: 'Rubik'
                },
            },
            autosize: true,
            showlegend: showLegend,
            legend: {
                orientation: 'h',
                x: 0,
                y: 1.1,
                font: {
                    family: 'Rubik',
                    size: 10,
                    color: '#f1f1f1'
                }
            },
            margin: margin,
            xaxis: {
                color: '#8f8f8f',
                title: {
                    text: '',
                    font: {
                        family: 'Rubik',
                        size: 10,
                        color: '#f1f1f1'
                    },
                    standoff: 0
                },
                tickfont: {
                    size: 9,
                    color: '#8f8f8f',
                    family: 'Rubik'
                },
                tickformat: xTickFormat,
                showline: true,
                linecolor: '#555456',
                showgrid: true,
                gridcolor: '#211e22',
            },
            yaxis: {
                color: '#8f8f8f',
                title: {
                    text: '',
                    font: {
                        family: 'Rubik',
                        size: 10,
                        color: '#f1f1f1'
                    },
                    standoff: 0,
                },
                tickfont: {
                    size: 9,
                    color: '#8f8f8f',
                    family: 'Rubik'
                },
                tickformat: yTickFormat,
                showline: true,
                linecolor: '#555456',
                gridcolor: '#211e22'
            },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            bargroupgap: false,
            bargap: bargap
        },
        useResizeHandler: true,
        style: {
            width: "100%",
            height: "100%"
        }
    }
};