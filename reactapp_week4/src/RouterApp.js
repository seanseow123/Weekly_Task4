import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./module/NavBar/Component/Navbar";
import About from './module/About/Component/About';
import Contact from './module/Contact/Component/Contact';
import Dashboard from './module/Dashboard/Component/Dashboard';
import PopPlayData from './module/PopPlayData/Component/PopPlayData';
import ScoreDisplay from './module/Score/Component/ScoreDisplay';



const RouterApp = () => {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/ScoreDisplay' element={<ScoreDisplay />} />
                <Route path='/PopPlayData' element={<PopPlayData />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>

        </BrowserRouter>

    )
}

export default RouterApp;