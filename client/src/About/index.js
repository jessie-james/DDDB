import React from 'react'
import './about.css'
import {Link} from 'react-router-dom'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-grid-one-two'>
                <div className='about-us-image'>
                </div>
                <div className='about-us-text'>
                    <h1>Our Product</h1>
                    <p>It's pretty simple, really. . . Pick a theme, or two, or three, and pick your subscription.  We'll do the rest.
                    </p>
                    <Link to='/ThemeChoices'><button className='get-started-button'>Get Started!</button></Link>
                </div>
            </div>
            <div className='about-cover-title'>
                <div className='about-cover-title-text'>
                    <h1>Rated #1 in bringing Dads and Daughters together</h1>
                </div>
            </div>
            <div className='about-grid-two-one'>
                <div className='about-us-text'>
                    <h1>Meet Us!</h1>
                    <p>We are the founders/developers of Daddy Daughter Dater Boxes, or DDDB.  This is who we are.</p>
                </div>
                <div className='about-image'>
                    
                </div>
            </div>
        </div>
    )
}

export default About