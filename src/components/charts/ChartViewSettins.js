const initialMargin = {l: 30, r: 30, t: 80, b: 30};

export const viewSettingsLayout = (chartTitle, showLegend, margin = initialMargin, xTickFormat, yTickFormat, bargap = 0.2, xTitle, yTitle, barMode = 'group', barNorm = '', yGrid = true, xGrid = true) => {
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
                    size: 12,
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
                zeroline: false,
                showgrid: xGrid,
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
                showgrid: yGrid,
                linecolor: '#4A4A4A',
                gridcolor: '#4A4A4A'
            },
            paper_bgcolor: 'transparent',
            plot_bgcolor: 'transparent',
            bargroupgap: false,
            bargap: bargap,
            modebar: {
                bgcolor: 'transparent'
            },
            barmode: barMode,
            barnorm: barNorm
        },
        useResizeHandler: true,
        style: {
            width: "100%",
            height: "100%"
        }
    }
};

export const viewSettingsConfig = (displayModeBar = true) => {
    return {
        config: {
            scrollZoom: true,
            displayModeBar: displayModeBar,
            modeBarButtonsToRemove: [
                'zoom2d',
                'pan2d',
                'select2d',
                'lasso2d',
                // 'zoomIn2d',
                // 'zoomOut2d',
                'autoScale2d',
                'resetScale2d',
                'hoverClosestCartesian',
                'hoverCompareCartesian',
                'zoom3d',
                'pan3d',
                'resetCameraDefault3d',
                'resetCameraLastSave3d',
                'hoverClosest3d',
                'orbitRotation',
                'tableRotation',
                'zoomInGeo',
                'zoomOutGeo',
                'resetGeo',
                'hoverClosestGeo',
                'toImage',
                'sendDataToCloud',
                'hoverClosestGl2d',
                'hoverClosestPie',
                'toggleHover',
                'resetViews',
                'toggleSpikelines',
                'resetViewMapbox'
            ]
        }
    }
};