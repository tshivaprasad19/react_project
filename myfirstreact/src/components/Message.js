import React, {Component} from 'react';

class Message extends Component {

    //The super method is used because we use the component and a call to the base class has to made
    constructor() {
        super()
        this.state = {
            message :'Welcome Visitor'
        }
    }

    changeMessage() {
        this.setState({
            message : 'Thanks for Subscribing'
        })
    }

    unSubscribe() {
        this.setState({
            message : 'Unsubscribed!!!'
        })
    }

    render () {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick = {() => this.changeMessage()}>Subscribe</button>
                <button onClick = {() => this.unSubscribe()}>unSubscribe</button>
            </div> 
        )
    }
}

export default Message