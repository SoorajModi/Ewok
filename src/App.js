import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home';
import NotFound from './components/notFound';
import Character from './components/character';
import NavBar from './components/navBar';

import './App.css';

function App() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
      <NavBar style={{ postion: 'absolute' }} />
      <header className="App-header" style={{ minHeight: '50vh' }}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/character/:id" render={(props) => <Character {...props} />} />
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
