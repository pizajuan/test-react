import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Root from './components/router-components/Root';
// import Home from './components/router-components/Home';
// import Home from './components/router-components/Home';
// import User from './components/router-components/User';
// import * as appRoutes from './components/router/router.config';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import RouteWithSubRoutes from './components/router/RouteWithSubRoutes';
// import from 'react-router-dom';
// import Greet from './components/Greet';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Form from './components/Form';
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import Hello from './components/Hello';

//Props: la manera de comunicar componentes padres con hijos

class App extends Component {
  render() {
    return (
      <div className="App">
        hola
        {/* <Router>
          <div>
            <ul>
              <li>
                <Link to='/user'>User</Link>
              </li>
              <li>
                <Link to='/home'>Home</Link>
              </li>
            </ul>
          </div>
          {/* se usa para pasrse parametros a los hijos */}
          {/* <Switch> */}
            {/* <Route path="/user/:id?">
              <User />
            </Route>
            <Route path="/">
              <Home />
            </Route> */}
            {/* {appRoutes.appRoutes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))} */}
            {/* {appRoutes.appRoutes.map((route, i) => (
              <Route key={i} path={route.path}>
                {this.component(route.component)}
              </Route>
            ))} */}
          {/* </Switch> */}
        {/* </Router> */}

        {/* <Form /> */}
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

// function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }

export default App;
