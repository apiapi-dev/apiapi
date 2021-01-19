import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import NavBar from './components/nav';
import Home from './components/home';
import Blog from './components/blog';
import About from './components/about';
import './assets/sass/main.scss';

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="body">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route path='/' component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
