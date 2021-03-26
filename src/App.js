import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/home';
import NotFound from './components/notFound';
import Character from "./components/character";
import NavBar from "./components/navBar";

import './App.css';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <header className="App-header">
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route path={"/character/:id"} render={(props) => <Character {...props}/>}/>
                        <Route exact path={"/"} component={Home}/>
                        <Route path={"*"} component={NotFound}/>
                    </Switch>
                </Router>
            </header>
        </div>
    );
}

export default App;
