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
                    <h1>Tailored Daddy Daughter Dates for every kind of kid</h1>
                    <p>It's pretty simple, really... tell us what you and your daughter like to do and we will send you a fun prepackaged set so all you have to worry about is having fun and landing those dad jokes. We'll do the rest.</p>
                    <Link to='/ThemeChoices'><button className='get-started-button'>Get Started!</button></Link>
                    <Link to='/ThemeChoices'>already have an account?<button className='sign-in'>Sign in</button></Link>
                </div>
            </div>
            <div className='about-cover-title'>
                <div className='about-cover-title-text'>
                    <h1>Rated #1 in bringing Dads and Daughters together</h1>
                </div>
            </div>
            <div className='about-grid-two-one'>
                <div className='about-us-text'>
                    <h1>How it Works</h1>
                    <div>
                        <h4>1</h4>
                        <p>Fill out your DDDB profile</p>
                        <p>Tell us what you like and don't like help use  understand the type of activites you want for you and your daughter</p>
                    </div>
                    <div>
                        <h4>Select how Often</h4>
                        <p>Pick how often you want to have one on one time with you daughter will send a box ad often as you would like</p>
                    </div>
                    <div>
                        <h4>Tell us what you think</h4>
                        <p>Send feedback and we will keep tailoring the boxes to your needs. You can even tell us if you want the same box twice!</p>
                    </div>
                </div>
                <div className='about-image'></div>
                <div className='about-cover-title'>
                    <div className='about-cover-title-text'>
                        <h1>Ready to Sign up?</h1>
                        <button>Take your Date Box quiz</button>
                        <Link to='/ThemeChoices'>already have an account?<button className='sign-in'>Sign in</button></Link>

                    </div>
                </div>
            <div className='about-grid-two-one'>
                <div className='about-us-text'>
                    <h1>Meet Us!</h1>
                    <p>We are the founders/developers of Daddy Daughter Dater Boxes, or DDDB.  This is who we are.</p>
                </div>
                <div className='about-image'></div>
            </div>
            </div>
        </div>
    )
}

export default About