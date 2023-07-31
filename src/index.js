import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterBlog from "./RouterBlog";
import {BrowserRouter} from "react-router-dom";

import './internationalization/i18nLanguage'

// Root
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <RouterBlog/>
        </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals();
