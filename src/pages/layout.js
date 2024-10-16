import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import App from '../App'
import Home from '../componets/Home'
import Dashboard from '../componets/Dashboard'
import Errorpage from '../pages/errorpage'


export default function Layout() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {/* <Route element={<Layout />} > */}
                        <Route path="/" element={<Home />} />
                        <Route path="todo" element={<App />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="errorpage" element={<Errorpage />} />
                        {/* <Route path="contact" element={<Contact />} /> */}
                    {/* </Route> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}
