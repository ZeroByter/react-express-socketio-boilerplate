import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';

const socket = io()

ReactDOM.render(<App socket={socket} />, document.getElementById('root'));