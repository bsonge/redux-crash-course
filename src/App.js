import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import store from './store.js';

import PostForm from './components/PostForm.js';
import Posts from './components/Posts.js';

// const store = createStore(() => [], {}, applyMiddleware());  //dummy function, initial state, middleware applier

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
