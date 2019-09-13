import React, { Component } from 'react'
import './custombox.css'

class CustomBox extends Component {
    openForm() {
        //how to creat a pop up compented on click 
        //make sure to add a close pop up on to the form once it has been selected
        // will need to acess state inotred to get a list of the themes that are currently stored in the data base
    }
    render() {
    
        return (<div className="box-container custom-box-container">
            <h2>Custom Suprize Box</h2>
            <p>image goes here</p>
            <p>pick themes that you and your daughter like and we will at random select one of those theme boxes for you and send it to you every month.</p>
            <button onClick={this.openForm}>Select</button>
        </div>
        )
    }
}
export default CustomBox
