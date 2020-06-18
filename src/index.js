import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducer';
import App from "./components/app/App";
import ApiClient from "./service/ApiClient";
import { ContextProvider } from './components/context/Context';
import './assets/sass/styles.scss';
import {composeWithDevTools} from "redux-devtools-extension";

const api = new ApiClient();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <ContextProvider value={api}>
            <App />
        </ContextProvider>
    </Provider>, document.getElementById('app'));