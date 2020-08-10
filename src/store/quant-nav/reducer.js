const initialState = {
    navData: [
        {
            title: 'Zt - Forecast',
            pathName: 'zt-forecast',
            icon: 'forecast.svg',
            iconActive: 'forecast-active.svg',
            iconThumb: 'forecast.svg'
        },
        {
            title: 'Baseline Model',
            pathName: 'baseline-model',
            icon: '',
            iconActive: '',
            iconThumb: ''
        },
        {
            title: 'Stylized Attributes',
            pathName: 'stylized-attributes',
            icon: '',
            iconActive: '',
            iconThumb: ''
        },
        {
            title: 'Feature Exploration',
            pathName: 'feature-exploration',
            icon: '',
            iconActive: '',
            iconThumb: ''
        },
        {
            title: 'Market Metrics',
            pathName: 'market-metrics',
            icon: '',
            iconActive: '',
            iconThumb: ''
        },
        {
            title: 'Global Correlations',
            pathName: 'global-correlations',
            icon: '',
            iconActive: '',
            iconThumb: ''
        },
        {
            title: 'Data',
            pathName: 'data',
            icon: '',
            iconActive: '',
            iconThumb: ''
        }
    ]
};

export const quantNavReducer = (state = initialState) => {

    return state;

};