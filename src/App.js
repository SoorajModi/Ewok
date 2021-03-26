import React from "react";
import Home from './components/Home';
import NotFound from './components/NotFound';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </Router>
            </header>
        </div>
    );
}

export default App;
