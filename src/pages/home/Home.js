import React, { Fragment } from 'react';
import './home.scss';

const Home = () => {

    // useEffect(() => {
        // fetch("https://satoshiscore.net/api/trend", {
        //     method: 'GET',
        //     redirect: 'follow',
        //     headers: {
        //         'Authorization': 'Token b962c604470dd3c484f245810b57098026fffa21',
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then(response => response.json())
        //     .then(result => console.log('result - ', result))
        //     .catch(error => console.error('error - ', error));
        // console.log(this.props);
    // });

    return(
        <Fragment>
            <section className="section folder">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="folder-title">
                                <h1 className="title-1">Quant lab</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )

};

export default Home;