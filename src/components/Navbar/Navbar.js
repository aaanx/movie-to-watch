import React from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';
import {ImList} from "react-icons/im";

function Navbar(props){
return (
    <div className="navbar">
        <Link to="/" className="navbar__title">What to watch?</Link>
        <p className="navbar__watch-list"> 
            <span className="navbar__watch-list__number">{props.numOfmovies}</span> 
            <Link to="/watch-list" className="navbar__watch-list__link"><ImList/></Link>
        </p>
    </div>
)
}

export default Navbar;