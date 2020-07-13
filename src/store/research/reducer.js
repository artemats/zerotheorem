const initialState = {
    data: [
        {
            preview: [
                'https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1263324/pexels-photo-1263324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
            subtitle: 'Literature review',
            description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
        },
        {
            preview: [
                'https://images.pexels.com/photos/1097946/pexels-photo-1097946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1099339/pexels-photo-1099339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/844125/pexels-photo-844125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'Predicting Bitcoin Price Direction Exchange Rate U',
            subtitle: 'Literature review',
            description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
        },
        {
            preview: [
                'https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/3631991/pexels-photo-3631991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1099296/pexels-photo-1099296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'The Economics of Bitcoin Price Formation',
            subtitle: 'Literature review',
            description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
        },
        {
            preview: [
                'https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1263324/pexels-photo-1263324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
            subtitle: 'Literature review',
            description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
        },
        {
            preview: [
                'https://images.pexels.com/photos/1097946/pexels-photo-1097946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1099339/pexels-photo-1099339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/844125/pexels-photo-844125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'Predicting Bitcoin Price Direction Exchange Rate U',
            subtitle: 'Literature review',
            description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
        },
        {
            preview: [
                'https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/3631991/pexels-photo-3631991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1099296/pexels-photo-1099296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'The Economics of Bitcoin Price Formation',
            subtitle: 'Literature review',
            description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
        },
        {
            preview: [
                'https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1263324/pexels-photo-1263324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
            subtitle: 'Literature review',
            description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
        },
        {
            preview: [
                'https://images.pexels.com/photos/1097946/pexels-photo-1097946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1099339/pexels-photo-1099339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/844125/pexels-photo-844125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'Predicting Bitcoin Price Direction Exchange Rate U',
            subtitle: 'Literature review',
            description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
        },
        {
            preview: [
                'https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/3631991/pexels-photo-3631991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1099296/pexels-photo-1099296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'The Economics of Bitcoin Price Formation',
            subtitle: 'Literature review',
            description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
        },
        {
            preview: [
                'https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1263324/pexels-photo-1263324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
            subtitle: 'Literature review',
            description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
        },
        {
            preview: [
                'https://images.pexels.com/photos/1097946/pexels-photo-1097946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1099339/pexels-photo-1099339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/844125/pexels-photo-844125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'Predicting Bitcoin Price Direction Exchange Rate U',
            subtitle: 'Literature review',
            description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
        },
        {
            preview: [
                'https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/3631991/pexels-photo-3631991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1099296/pexels-photo-1099296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'The Economics of Bitcoin Price Formation',
            subtitle: 'Literature review',
            description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
        },
        {
            preview: [
                'https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1263324/pexels-photo-1263324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
            subtitle: 'Literature review',
            description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
        },
        {
            preview: [
                'https://images.pexels.com/photos/1097946/pexels-photo-1097946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1099339/pexels-photo-1099339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/844125/pexels-photo-844125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'Predicting Bitcoin Price Direction Exchange Rate U',
            subtitle: 'Literature review',
            description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
        },
        {
            preview: [
                'https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/3631991/pexels-photo-3631991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1099296/pexels-photo-1099296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'The Economics of Bitcoin Price Formation',
            subtitle: 'Literature review',
            description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
        },
        {
            preview: [
                'https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1263324/pexels-photo-1263324.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
            subtitle: 'Literature review',
            description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
        },
        {
            preview: [
                'https://images.pexels.com/photos/1097946/pexels-photo-1097946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1099339/pexels-photo-1099339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/844125/pexels-photo-844125.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'Predicting Bitcoin Price Direction Exchange Rate U',
            subtitle: 'Literature review',
            description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
        },
        {
            preview: [
                'https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/3631991/pexels-photo-3631991.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://images.pexels.com/photos/1099296/pexels-photo-1099296.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            ],
            title: 'The Economics of Bitcoin Price Formation',
            subtitle: 'Literature review',
            description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
        },
    ],
    isLoading: true,
    error: null
};

export const researchReducer = (state = initialState, action) => {

    switch (action.type) {

        default:
            return state;
    }

};