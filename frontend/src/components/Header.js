import React, { useState} from 'react';
import './Header.css';

function Header() {
    const [open, setstate] = useState(false);
    return (
        <div className="Header">
            <h1 className="Header-title">MEDONA</h1>
            <ul className="Header-list" style={{ transform: open ? "translateX(0px)" : "" }}>
                <li id="Header-li">
                    <a href="#">HomePage</a>
                </li>
                <li id="Header-li">
                    <a href="#">StoreLocator</a>
                </li>

                <li>
                    <button id="Header-login"><a>Login</a></button>
                </li>
                <li className="Header-log">
                    <a href="#">Login</a>
                </li>

            </ul>
            <i onClick={() => setstate(!open)} className="fas fa-bars Header-icon"></i>
        </div>
    );
}


export default Header;