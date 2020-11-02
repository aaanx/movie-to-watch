import React from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';

function Navbar(){
return (
    <div className="navbar">
        <Link to="/" className="navbar__title">What to watch?</Link>
        <p> 
            <span>12</span> 
            <Link to="/watch-list" className="navbar__watch-list">My watch list</Link>
        </p>
    </div>
)
}

export default Navbar;