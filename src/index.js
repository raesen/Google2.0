import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './main.css';
import App from './App';
import './global.css';

import { ResultContextProvider } from './Context/ResultContextProvider';

const root = ReactDom.createRoot(document.getElementById('root'));
//render react appl. to id named 'root'
root.render(
    <ResultContextProvider>
        <Router>
            <App />
        </Router>
    </ResultContextProvider>,
);

