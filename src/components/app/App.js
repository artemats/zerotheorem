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
import PageNotFound from "../../pages/404/404";
import Research from "../../pages/research/Research";
import LiteratureReview from "../../pages/literature-review/LiteratureReview";
import Contact from "../../pages/contact/Contact";

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
                        <Route path="/resources">
                            <Resources />
                        </Route>
                        <Route path="/quant-lab">
                            <Forecast />
                        </Route>
                        <Route path="/faq">
                            <Faq />
                        </Route>
                        <Route exact path="/research">
                            <Research />
                        </Route>
                        <Route path="/research/:id">
                            <LiteratureReview />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route exact path="*">
                            <PageNotFound />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </div>
        )
    }

}

export default App;
