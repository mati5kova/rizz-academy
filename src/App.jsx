import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import PageUnderConstruction from './components/PageUnderConstruction';
import './styles/ResponsiveDesign.css';

import './styles/App.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />}></Route>
            <Route path="/purchase" element={<PageUnderConstruction />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    );
}

export default App;
