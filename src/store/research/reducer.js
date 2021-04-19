import {FILTER_BY_SEARCH, TOGGLE_TAG} from "Store/constants";

const initialState = {
    data: [
        {
            banner: 'https://images.unsplash.com/photo-1602096933111-f11679566597?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            preview: [
                'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/flagged/photo-1554386690-8627e1041100?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'Bitcoin price prediction using machine learning',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'Ayodeji Awosika in Forge',
            tags: ['Literature Review', 'Research']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1543699539-33a389c5dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1591994843349-f415893b3a6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/flagged/photo-1554386690-ddcab0b98d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'Predicting Bitcoin Price Direction Exchange Rate U',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
            tags: ['Performance reports']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'The Economics of Bitcoin Price Formation',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
            tags: ['Literature Review']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
            tags: ['Research']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1559406041-c7d2b2e98690?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'Predicting Bitcoin Price Direction Exchange Rate U',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
            tags: ['Performance', 'Research']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1465815367149-ca149851a3a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'The Economics of Bitcoin Price Formation',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
            tags: ['Literature Review', 'Performance']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
            tags: ['Research']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1502514276381-1ea51dfe201c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'Predicting Bitcoin Price Direction Exchange Rate U',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
            tags: ['Literature Review']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1495542779398-9fec7dc7986c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'The Economics of Bitcoin Price Formation',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
            tags: ['Performance Reports']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1502514276381-1ea51dfe201c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
            tags: ['Research']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'Predicting Bitcoin Price Direction Exchange Rate U',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
            tags: ['Literature Review', 'Performance Reports']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'The Economics of Bitcoin Price Formation',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
            tags: ['Literature Review']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
            tags: ['Research']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'Predicting Bitcoin Price Direction Exchange Rate U',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
            tags: ['Performance Reports']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'The Economics of Bitcoin Price Formation',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
            tags: ['Literature Review', 'Research']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'A Gated Recurrent Unit Approach to Bitcoin Price P-1',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework',
            tags: ['Literature Review', 'Performance Reports']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'Predicting Bitcoin Price Direction Exchange Rate U',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'Mallqui and Fernandes (2018) used machine learning techniques to predict the price direction as well as the maximum, minimum and closing prices of daily Bitcoin exchange rate',
            tags: ['Literature Review', 'Performance Reports', 'Research']
        },
        {
            banner: 'https://images.unsplash.com/photo-1602096678880-48b2c4640bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            preview: [
                'https://images.unsplash.com/photo-1550565227-a6144af19c78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            ],
            title: 'The Economics of Bitcoin Price Formation',
            date: 'Aug 29',
            timeRead: '4 min',
            description: 'In the past, several studies have identified the factors affecting Bitcoin’s price to include market fundamentals (supply and demand), the attractiveness of investors, and global',
            tags: []
        },
    ],
    tags: [
        {
            id: 0,
            title: 'Literature Review',
            isActive: false
        },
        {
            id: 1,
            title: 'Performance Reports',
            isActive: false
        },
        {
            id: 2,
            title: 'Research',
            isActive: false
        },
    ],
    isLoading: false,
    error: null
};

export const researchReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_TAG:
            const tag = state.tags[action.payload];
            const newTag = {...tag, isActive: !tag.isActive};
            return {...state, tags: [...state.tags.slice(0, action.payload), newTag, ...state.tags.slice(action.payload + 1) ]};
        case FILTER_BY_SEARCH:
            // const filteredPosts = [...state.data.filter(post => post.title.toLowerCase().includes(action.payload.toLowerCase()))];
            console.log('search term - ', action.payload);
            // console.log('filtered posts - ', filteredPosts);
            // console.log({...state, data: filteredPosts});
            return state;
        default:
            return state;
    }

};