import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import ListBeers from './pages/ListBeers';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={ListBeers}/>
          <Route exact path='/beers/:id' component={SingleBeer}/>
          <Route exact path='/new-beer' component={NewBeer}/>
          <Route exact path='/random-beer' component={RandomBeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;