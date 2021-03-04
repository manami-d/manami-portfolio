import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {} from 'react-router-dom';
import { GlobalStyles } from './styles/globalStyles';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>,
    document.getElementById('root')
);
