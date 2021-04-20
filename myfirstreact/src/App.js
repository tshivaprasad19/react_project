import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
/*
This is the default export*/
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionalClick from './components/FunctionalClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
//this is the constant export
//import {Greet} from './components/Greet';
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my first project!!!!!!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
class App extends Component{
  render()
  {
    return(
      <div className="App">
        <NameList/>
        {/* <UserGreeting/> */}
       {/* <Greet name="Shaw">
          This is the Children Props
       </Greet>
       <Hello name="Mark"/>
       <Greet name="Banny"/>
       <Greet name="Brad"/>
       <Greet name="Michi"/>
       <Welcome name="Honor"/>
       <Message/>
       <Counter /> */}
       {/* <FunctionalClick/> 
       <ClassClick/>
       <EventBind/> */}
       {/* <ParentComponent/> */}
      </div>
    );
  }
}

export default App;
