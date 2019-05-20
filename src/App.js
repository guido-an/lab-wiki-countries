import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import CountryList from './CountryList'
import CountryDetail from './CountryDetail'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar />
       <Switch>
        <Route exact path="/" component={CountryList}/>
        <Route path="/:name" component={CountryDetail} /> 
        </Switch>  
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
