import React, { Component } from 'react'
import ThemeBox from './ThemeBox'
import CustomBox from '../Custombox'
import { withGlobalProvider} from '../../GlobalProvider.js'
import { Link } from 'react-router-dom'
import './themeboxcontainer.css'

class ThemeBoxContainer extends Component {
    componentDidMount(){
        this.props.getThemedBoxes()
    }
    render() {
        const mappedBoxes = this.props.themedBoxes.map((box) => <ThemeBox key={box._id} box={box} class='box-container'/>)
        return (<>
            <div className="ThemeBoxesContainer">
                {mappedBoxes}
                <CustomBox />
            </div>
            <div className="switch-to-subscription">
                <h1>Pick a Subscription</h1>
                <Link to='/shop'className="next-button">Next</Link>
            </div> 
        </>)
    }
} export default withGlobalProvider(ThemeBoxContainer)