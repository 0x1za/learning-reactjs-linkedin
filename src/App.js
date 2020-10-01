import './App.css';

import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import AboutPage from './pages/AboutPage'
import Article from './pages/ArticlePage'
import ArticleList from './pages/ArticleListPage'
import HomePage from './pages/homepage'
import Navbar from './NavBar'
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/about" component={AboutPage}/>
              <Route path="/articles-list" component={ArticleList}/>
              <Route path="/article/:name" component={Article}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
