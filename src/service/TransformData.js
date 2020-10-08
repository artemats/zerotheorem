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
}

export default TransformData;