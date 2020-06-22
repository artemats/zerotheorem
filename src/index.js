import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducer';
import App from "./components/app/App";
import ApiClient from "./service/ApiClient";
import { ContextProvider } from './components/context/Context';
import './assets/sass/main.scss';
import {composeWithDevTools} from "redux-devtools-extension";
import ErrorBoundry from "./components/error-boundry/ErrorBoundry";

const api = new ApiClient();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ContextProvider value={api}>
                <App />
            </ContextProvider>
        </ErrorBoundry>
    </Provider>, document.getElementById('app'));