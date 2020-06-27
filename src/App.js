import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header';
import Home from "./components/home";
import Contact from "./components/contact";
import NoMatch from "./components/404";
import Popup from "./components/popup";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/contact" component={Contact} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
            <Popup />
        </div>
    );
};

export default App;
