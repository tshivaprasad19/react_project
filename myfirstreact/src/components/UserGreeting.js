import React, { Component } from 'react'

class UserGreeting extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    
    render() {

        /*Short Circuit approach
        This is used when you want to return something if it present or else return nothing */
        return this.state.isLoggedIn && <div>Welcome User</div>


        // /*Ternary conditional operator approach*/
        // return this.state.isLoggedIn ? (
        //     <div>Welcome User</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // )

        /*Elementary approach */
            // let message 
            // if(this.state.isLoggedIn) {
            //     message = <div>Welcome User</div>
            // }
            // else {
            //     message = <div>Welcome Guest</div>
            // }

            // return message

        /*Conditional statement approach */
        // if(this.state.isLoggedIn) {
        //     return(
        //         <div>Welcome User</div>
        //     )
        // }
        // else {
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>Welcome User.....</div>
        //         <div>Weolcome Guest</div>
        //     </div>
            
        // )
    }
}

export default UserGreeting
