import React, { Fragment } from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import './App.css';

import Chat from './components/chat'
import Join from './components/join';

const App = () => (
  <Fragment>
    <div className="app">
    <div id="particles-js"></div>
      <Router>
        <Switch>
          <Route path='/' component={Join} exact/>
          <Route path='/chat' component={Chat} exact/>
        </Switch>
      </Router>
    </div>
  </Fragment>
)

export default App;
