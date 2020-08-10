const initialMargin = {l: 30, r: 30, t: 80, b: 30};

export const viewSettings = (chartTitle, showLegend, margin = initialMargin, xTickFormat, yTickFormat, bargap = 3, xTitle, yTitle) => {
    return {
        layout: {
            width: null,
            height: null,
            font: {
                family: 'Raleway, sans-serif'
            },
            title: {
                text: '<b>' + chartTitle + '</b>',
                x: 0.05,
                y: 0.98,
                font: {
                    size: 16,
                    color: '#B2B3B5',
                    family: 'Raleway, sans-serif',
                    fontWeight: 600
                },
            },
            autosize: true,
            showlegend: showLegend,
            legend: {
                orientation: 'h',
                x: -0.04,
                y: 1.15,
                font: {
                    family: 'Raleway, sans-serif',
                    size: 10,
                    color: '#B2B3B5'
                }
            },
            margin: margin,
            xaxis: {
                color: '#B2B3B5',
                title: {
                    text: xTitle,
                    standoff: 0,
                    font: {
                        family: 'Raleway, sans-serif',
                        size: 12,
                        color: '#B2B3B5'
                    }
                },
                tickfont: {
                    size: 10,
                    color: '#B2B3B5',
                    family: 'Raleway, sans-serif'
                },
                tickformat: xTickFormat,
                showline: false,
                showgrid: true,
                zeroline: false,
                linecolor: '#4A4A4A',
                gridcolor: '#4A4A4A',
            },
            yaxis: {
                color: '#B2B3B5',
                title: {
                    text: yTitle,
                    standoff: 0,
                    font: {
                        family: 'Raleway, sans-serif',
                        size: 12,
                        color: '#B2B3B5'
                    }
                },
                tickfont: {
                    size: 10,
                    color: '#B2B3B5',
                    family: 'Raleway, sans-serif'
                },
                tickformat: yTickFormat,
                showline: false,
                zeroline: false,
                linecolor: '#4A4A4A',
                gridcolor: '#4A4A4A'
            },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            bargroupgap: false,
            bargap: bargap,
        },
        useResizeHandler: true,
        style: {
            width: "100%",
            height: "100%"
        },
        config: {
            scrollZoom: true,
            displayModeBar: false
        }
    }
};