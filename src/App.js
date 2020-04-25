import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import './App.css';

import Chat from './components/chat'
import Join from './components/join';

const App = () => (
  <Router>
    <Switch>
      <Route path='/' component={Join} exact/>
      <Route path='/chat' component={Chat} exact/>
    </Switch>
  </Router>
)

export default App;
