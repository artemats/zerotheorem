import React, { Component } from "react";
import ErrorIndicator from "../error-indicator/ErrorIndicator";

class ErrorBoundry extends Component{

    state = {
        hasError: false,
        error: null
    };

    componentDidCatch(error) {
        this.setState({
            hasError: true,
            error: error
        });
    }

    render() {

        const { hasError, error } = this.state;

        if(hasError) {

            return <ErrorIndicator error={error} />

        }

        return this.props.children

    }

}

export default ErrorBoundry;