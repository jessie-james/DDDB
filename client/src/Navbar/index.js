import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <ul className='navbar-container'>
            <Link to='/' className='navbar-about'>ABOUT</Link>
            <Link to='/ThemeChoices' className='navbar-shop'>SHOP</Link>
            <Link to='/cart' className='navbar-cart'>CART</Link>
        </ul>
    )
}

export default Navbar