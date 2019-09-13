import React from 'react'
import './footer.css'
import GitHub from '../Assets/GitHub.png'
import LinkedIn from '../Assets/LinkedIn.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-contact-container'>
                <h1>Evan Nay</h1>
                <div className='footer-link-container'>
                    <a href='https://github.com/evannay/assignments'><img src={GitHub} alt=""/></a>
                    <a href='https://www.linkedin.com/in/evannay/'><img src={LinkedIn}></img></a>
                </div>
            </div>
            <div className='footer-contact-container'>
                <h1>Jessie James</h1>
                <div className='footer-link-container'>
                    <a href='https://github.com/jessie-james'><img src={GitHub} alt=""></img></a>
                    <a href='https://www.linkedin.com/in/jessie--james/'><img src={LinkedIn}></img></a>
                </div>
            </div>
            <div className='footer-contact-container'>
                <h1>Jeremy Bleak</h1>
                <div className='footer-link-container'>
                    <a href='https://github.com/Jeremybleak/assignments'><img src={GitHub} alt=""></img></a>
                    <a href='https://www.linkedin.com/in/jeremybleak/'><img src={LinkedIn}></img></a>
                </div>
            </div>
        </div>
    )
}

export default Footer