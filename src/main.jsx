import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//component
import Layout from "./components/layout/Layout.jsx"

import { Provider } from 'react-redux'
import store from "./Redux/store.jsx"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Provider store={store}>
    <Layout>
    <App />
    </Layout>
    </Provider>
    </BrowserRouter>
)
