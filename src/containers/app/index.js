import React, { Component } from 'react';
import './App.css';
import Welcome from "../../components/welcome";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(routerProps)=><Welcome {...routerProps}/>}/>

        </Switch>
      </div>
    );
  }
}

export default App;
