import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "../header/Header";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Wtf from "../../pages/wtf/Wtf";
import Resources from "../../pages/resources/Resources";
import Forecast from "../../pages/forecast/Forecast";

class App extends Component {

    render() {
        return(
            <div id="wrapper">
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/wtf">
                            <Wtf />
                        </Route>
                        <Route path="/resources">
                            <Resources />
                        </Route>
                        <Route path="/forecast">
                            <Forecast />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }

}

export default App;