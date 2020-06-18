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

            </div>
        )
    }

}

export default App;