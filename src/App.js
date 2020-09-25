import './App.css';

import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'

import AboutPage from './pages/AboutPage'
import Article from './pages/AboutPage'
import ArticleList from './pages/ArticleList'
import HomePage from './pages/homepage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={HomePage} exact/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/articles-list" component={ArticleList}/>
          <Route path="/article" component={Article}/>
        </div>
      </Router>
    );
  }
}

export default App;
