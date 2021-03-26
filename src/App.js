import React from "react";
import Home from './components/Home';
import NotFound from './components/NotFound';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Character from "./components/Character";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <header className="App-header">
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route path={"/character/:id"} render={(props) => <Character {...props}/>}/>
                        <Route exact path="/" component={Home}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </Router>
            </header>
        </div>
    );
}

export default App;
