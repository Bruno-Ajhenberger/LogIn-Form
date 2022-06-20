import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import App from './pages/App'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
        <BrowserRouter>
                <Routes> 
                        <Route path='/' element={<App />}/>
                        <Route path='home' element={<Home />}/>
                        <Route path='login' element={<LogIn />}/>
                </Routes>
        </BrowserRouter>
        
);

