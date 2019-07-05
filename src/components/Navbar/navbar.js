import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar()
{
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/hatpage">HatPage</Link>
            </li>
        </ul>
    )
}
