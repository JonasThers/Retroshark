import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header';
import Home from "./components/home";
import Contact from "./components/contact";
import Popup from "./components/popup";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Router>
      <Popup />
    </div>
  );
};

export default App;
