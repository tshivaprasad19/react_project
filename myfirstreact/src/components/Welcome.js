import React, {Component} from 'react';

//props is the immutable object
class Welcome extends Component {
     render () {
         return <h1>Welocome {this.props.name}</h1>
     }
}

export default Welcome