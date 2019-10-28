import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul className='navbar-container'>
            <Link to='/' className='navbar-about'>ABOUT</Link>
            <Link to='/faq' className='navbar-about'>FAQ</Link>
            <Link to='/sneakapeak' className='navbar-about'>Sneak-a-Peak</Link>
            <Link to='/ThemeChoices' className='navbar-shop'>Take the Quiz</Link>
            <Link to='/cart' className='navbar-cart'>Sign in</Link>
        </ul>
    )
}

export default Navbar