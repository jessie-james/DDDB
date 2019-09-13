import React from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext()

class GlobalProvider extends React.Component {
    constructor(){
        super()
        this.state = {
            themedBoxes: [],
            isSaved: false,
            isSubscribed: false,
            savedbox: JSON.parse(localStorage.getItem('savedbox')) || [],
            subscriptOption: JSON.parse(localStorage.getItem('subscriptionOption')) || "",
        }
    }

    getThemedBoxes = () => {
        axios.get('/box').then(response => {
            this.setState({ themedBoxes: response.data }) 
        }) 
    }

    savedSubscription = (subscriptionPlan) => {
        this.setState(prevState => ({
            isSubscribed: !prevState.isSubscribed,
            subscriptOption: subscriptionPlan,
        }),
            () => {
    
                localStorage.setItem('subscriptOption', JSON.stringify(this.state.subscriptOption))
            })
    }

   

    saveBoxTheme = (box, _id) => {
        this.setState(prevState => ({
            savedbox: [...prevState.savedbox, box],
        }),
            () => {
                console.log(this.state.savedbox)
                localStorage.setItem('savedbox', JSON.stringify(this.state.savedbox))
            })
        
    }

    deleteBoxTheme = (box) => {
        this.setState(prevState => ({
            savedbox: prevState.savedbox.filter(selected => selected !== (box))
        }),
            () => {
                localStorage.setItem('savedbox', JSON.stringify(this.state.savedbox))
            }
        )
        
    }

    
    render(){
        return(
            <Provider value={{
                getThemedBoxes: this.getThemedBoxes,
                saveBoxTheme: this.saveBoxTheme,
                savedSubscription: this.savedSubscription,
                deleteBoxTheme: this.deleteBoxTheme,
                savedSubscription2: this.savedSubscription2,
                savedSubscription3: this.savedSubscription3,
                savedSubscription4: this.savedSubscription4,
                ...this.state
        }}>
            {this.props.children}
        </Provider>
    )}
}

export default GlobalProvider

export const withGlobalProvider = Component => props =>
    <Consumer>
        {value => <Component {...value}{...props} />}
    </Consumer>



