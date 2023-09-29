import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider} from "./util/Context.jsx";
import {NextUIProvider} from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <NextUIProvider>
                    <App/>
                </NextUIProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
