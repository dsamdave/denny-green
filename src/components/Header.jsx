import React from 'react'
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <div className="Header">
        <div className="Header-first">
            <div className="call"><span>Call:</span>+234 9012624162</div>
            <div className="call support"><span>Support:</span>infor@yourcompany.com</div>
        </div>
        <div className="Header-second">
            <p className="login">Log In</p>
            <button>Register</button>
        </div>
        </div>
    )
}

export default Header
