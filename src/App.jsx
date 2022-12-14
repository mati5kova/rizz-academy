import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import PageUnderConstruction from './components/PageUnderConstruction';
import SuccessPage from './components/SuccessPage';
import './styles/App.css';
import './styles/ResponsiveDesign.css';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/success" element={<SuccessPage />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/purchase" element={<PageUnderConstruction />} />
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    );
}

export default App;
