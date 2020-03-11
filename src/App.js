import React, { Component } from 'react';
import './App.css';
// import Greet from './components/Greet';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
import Form from './components/Form';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import Hello from './components/Hello';

//Props: la manera de comunicar componentes padres con hijos

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        {/* <NameList /> */}
        {/* <UserGreeting /> */}
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
        {/* <Greet name='Bruce' heroName='Batman'>
          <p>this is children props</p>
        </Greet>
        <Greet name='Clark' heroName='Superman'>
          <button>
            Action
          </button>
        </Greet> */}
        {/* <Greet name='Diana' heroName='Wonderwoman'/> */}
        {/* <Welcome name='Bruce' heroName='Batman'/>
        <Welcome name='Clark' heroName='Superman'/>
        <Welcome name='Diana' heroName='Wonderwoman'/> */}
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
