import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import './index.css';
import './style.css';

ReactDOM.render(<App store={store}/>, document.getElementById('root'));