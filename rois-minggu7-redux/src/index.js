import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import MainReducer from './MainReducer';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css'
// import registerServiceWorker from './registerServiceWorker'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = compose(window.devToolsExtension ? window.devToolsExtension(): f=>
f)(createStore)(MainReducer)

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
    serviceWorker.register()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
