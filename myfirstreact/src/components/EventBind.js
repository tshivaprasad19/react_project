import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }
    }
    
    clickHandler() {
        this.setState({
            message: 'Good Bye'
        })
        console.log("undefined")
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler.bind(this)}>Clicck</button>
            </div>
        )
    }
}

export default EventBind
