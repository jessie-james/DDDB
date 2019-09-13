import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='hero-image'>
            <div className='hero-title'>
                <img src="" alt=""/>
                <Link to='/' className="header-link">DADDY DAUGHTER DATE BOXES</Link>
                <h3>Bond with you daughter you fool!</h3>
            </div>
        </div>
    )
}

export default Header