import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "../header/Header";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Resources from "../../pages/resources/Resources";
import Forecast from "../../pages/quant-lab/QuantLab";
import Faq from "../../pages/faq/Faq";
import ScrollToTop from "../scroll-to-top/ScrollToTop";
import PageNotFound from "../../pages/404/404";
import Research from "../../pages/research/Research";
import LiteratureReview from "../../pages/literature-review/LiteratureReview";
import Contact from "../../pages/contact/Contact";
import Modal from "../modal/Modal";
import BackTest from "../../pages/back-test/BackTest";
import Footer from "../footer/Footer";

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
                            <Footer />
                        </Route>
                        <Route path="/about">
                            <About />
                            <Footer />
                        </Route>
                        <Route path="/resources">
                            <Resources />
                            <Footer />
                        </Route>
                        <Route path="/quant-lab">
                            <Forecast />
                        </Route>
                        <Route path="/faq">
                            <Faq />
                            <Footer />
                        </Route>
                        <Route exact path="/research">
                            <Research />
                            <Footer />
                        </Route>
                        <Route path="/research/:id">
                            <LiteratureReview />
                            <Footer />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                            <Footer />
                        </Route>
                        <Route path="/back-test">
                            <BackTest />
                            <Footer />
                        </Route>
                        <Route exact path="*">
                            <PageNotFound />
                        </Route>
                    </Switch>
                    <Modal />
                </Router>
            </div>
        )
    }

}

export default App;
