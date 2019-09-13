import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Cart from './Cart/Index'
import StoreFront from './StoreFront/index'
import ThemeBoxContainer from './StoreFront/ThemeboxContainer'
import Footer from './Footer'
import './styles.css'

import { Switch, Route } from 'react-router-dom'


const App = () => {
    return (
        <div className='app-container'>
            <Header />
            <Navbar />
            <Switch>
                <Route exact path='/' component={About} />
                <Route path='/cart' component={Cart}/>
                <Route path='/shop' component={StoreFront} />
                <Route path='/ThemeChoices' component={ThemeBoxContainer}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default App