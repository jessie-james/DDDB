import React from 'react'
import { withGlobalProvider } from '../../GlobalProvider'

const ThemeBox = (props) => {
    let { theme, imgUrl, _id } = props.box
    console.log(props.savedbox)
    const boxExists = props.savedbox.find(box => box._id === _id)
    console.log(boxExists)
  


    return (
        <div className={props.class}>
            <h2>{theme}</h2>
            <img src={imgUrl} alt='' className='theme-box-images'/>
            {
               boxExists
                    ? <div onClick={() => props.deleteBoxTheme(props.box, _id)} className="delete-theme-button"><p>Your item has been added to the cart</p><button className="delete-them-button">X</button></div>
                    : <button onClick={() => props.saveBoxTheme(props.box, _id)} className="save-theme-button">Select Theme</button>
            }
            
        </div>
    )
}
export default withGlobalProvider(ThemeBox)