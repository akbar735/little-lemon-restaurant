import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg"
import "./Header.css"
export default function Header(){
    return(
        <nav className="header">
            <ul>
                <li><img src={Logo} alt="Logo" /></li>
                <li><Link className="nav-menu-item"  to="/">Home</Link></li>
                <li><Link className="nav-menu-item" to={'/about'}>About</Link></li>
                <li><Link className="nav-menu-item" to={'/menu'}>Menu</Link></li>
                <li><Link className="nav-menu-item" to={'/booking'}>Reservations</Link></li>
                <li><Link className="nav-menu-item" to={'/booking'}>Order Online</Link></li>
                <li><Link className="nav-menu-item" to={'/booking'}>Login</Link></li>
            </ul>
        </nav>
    )
}