import React, { Component } from 'react';

class App extends Component {

    componentDidMount() {
        fetch("https://satoshiscore.net/api/trend", {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            credentials: 'include',
            headers: {
                'Authorization': 'Token b962c604470dd3c484f245810b57098026fffa21',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => console.log('result - ', result))
            .catch(error => console.error('error - ', error));
    }

    render() {
        return(
            <div>
                <h1 className="title-1">Quant lab</h1>
                <h2 className="title-2">Wtf...is zt?</h2>
                <h3 className="title-3">A Gated Recurrent Unit Approach to Bitcoin Price P-1</h3>
                <p>Traditional neural networks have shortcomings in effectively using prior information for future predictions of Bitcoin price. Therefore, Dutta et al. (2020) investigated a framework</p>
            </div>
        )
    }

}

export default App;