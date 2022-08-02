import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ '/' } element={ <MainLayout/> }>
                    <Route path={ '/' } element={ <HomePage/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
