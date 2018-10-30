import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Search from './components/Search';
import {BrowserRouter as Router ,Route,Link,Switch,Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Star War App</h1>
        <Router>
          <Route path="/" Component={Login}/>

        </Router>
        {/* <Login /> */}
        <Search />
      </div>
    );
  }
}

export default App;
