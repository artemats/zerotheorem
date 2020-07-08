import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "../header/Header";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Wtf from "../../pages/wtf/Wtf";
import Resources from "../../pages/resources/Resources";
import Forecast from "../../pages/quant-lab/QuantLab";
import Footer from "../footer/Footer";
import Faq from "../../pages/faq/Faq";
import ScrollToTop from "../scroll-to-top/ScrollToTop";

class App extends Component {

    render() {

        return(
            <div id="wrapper">
                <Router>
                    <ScrollToTop />
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
                        <Route path="/quant-lab">
                            <Forecast />
                        </Route>
                        <Route path="/faq">
                            <Faq />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </div>
        )
    }

}

export default App;
