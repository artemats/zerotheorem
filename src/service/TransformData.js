class TransformData {

    static trend(trendData) {
        const data = {
            date: [],
            prediction: [],
            rmse: [],
            upper_band: [],
            lower_band: []
        };
        trendData.data.map(point => {
            data.date.push(point.date);
            data.prediction.push(point.prediction);
            data.rmse.push(point.rmse);
            data.upper_band.push(point.upper_band);
            data.lower_band.push(point.lower_band);
        });
        return data;
    };

    static residualPlot(residualData) {
        const data = {
            date: [],
            residual: []
        };
        residualData.data.map(point => {
            data.date.push(point.date);
            data.residual.push(point.residual);
        });
        return data;
    }

    static residualHistogram(residualData) {
        return {
            bins: residualData.data.bins,
            frecuencies: residualData.data.frecuencies
        };
    }

    static qqPlot(qqPlotData) {
        return {
            z_actual: qqPlotData.data.z_actual,
            z_theorical: qqPlotData.data.z_theorical,
            line: qqPlotData.line
        }
    }

    static probabilityPlot(probabilityData) {
        return {
            prob_theorical: probabilityData.data.prob_theorical,
            prob_actual: probabilityData.data.prob_actual,
            line: probabilityData.line
        }
    }

}

export default TransformData;