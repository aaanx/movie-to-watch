import React from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';

function Navbar(){
return (
    <div className="navbar">
        <p className="navbar__title">What to watch?</p>
        <Link to="/watch-list" className="navbar__watch-list">My watch list</Link>
    </div>
)
}

export default Navbar;