const initialState = {
    isDisabled: true,
    downloads: [
        {
            title: 'DownLoad <br /> ZT-Forecast',
            buttonTitle: 'SS_D.CSV',
            url: '#'
        },
        {
            title: 'DownLoad <br /> ZT-Forecast',
            buttonTitle: 'SS_D.CSV',
            url: '#'
        },
        {
            title: 'DownLoad <br /> ZT-Forecast',
            buttonTitle: 'SS_D.CSV',
            url: '#'
        },
        {
            title: 'DownLoad <br /> ZT-Forecast',
            buttonTitle: 'SS_D.CSV',
            url: '#'
        },
        {
            title: 'DownLoad <br /> ZT-Forecast',
            buttonTitle: 'SS_D.CSV',
            url: '#'
        },
        {
            title: 'DownLoad <br /> ZT-Forecast',
            buttonTitle: 'SS_D.CSV',
            url: '#'
        }
    ]
};

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};