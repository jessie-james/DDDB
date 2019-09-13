import React from 'react'
import ThemedBox from '../StoreFront/ThemeboxContainer/ThemeBox'
import { withGlobalProvider } from '../GlobalProvider'
import './cart.css'
import '../StoreFront/storeFront.css'

const Cart = (props) => {
    console.log(props)
    
    let { lenght, price } = props.subscriptOption
    const mappedThemes = props.savedbox.map((box) => <ThemedBox key={box._id} box={box} class='cart-box-container'/>)
    
    
return (
    <div className="cart-container">
        <div className='cart-title'>ThemeBoxes Selected</div>
        <div className='cart-mappedboxes-container'>
            {mappedThemes}
        </div>
        <div className="selected-subscription">Subcription Package selected
            <h3>{lenght}</h3>
            <h3>{price}</h3>
        </div>
        <div className="total-container">
            <h1>Total</h1>
            <h3>{price} X box Number</h3>
        </div>

    </div>
    )
}
export default withGlobalProvider(Cart)