import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import react from 'react';

function showRoutes() {
    return (
            <nav>
                <ul>
                    <li><Link to="/">Show Route Page</Link></li>
                    <li><Link to="/test">test</Link></li>
                    <li><Link to="/Products">Products</Link></li>
                    <li><Link to="/Products52">Products52</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
    );
}



export default showRoutes;