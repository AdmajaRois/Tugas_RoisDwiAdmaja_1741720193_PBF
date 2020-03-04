import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import BlogPost from './container/BlogPost/BlogPost';
import Tugas from './container/Tugas/Tugas';
import Sidebar from './component/sidebar';

ReactDOM.render(<Tugas />, document.getElementById('content'));
ReactDOM.render(<Sidebar/>, document.getElementById('sidebar'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
