import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/logo192.png'
import './Logo.css';

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
           <img src={logo} alt="logo"></img> 
        </Link>
    </aside>