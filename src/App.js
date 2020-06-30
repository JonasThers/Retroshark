import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoadingPage, MainLayout } from './components/layout/layout';
import Loading from './components/loading';
import Home from "./components/home";
import Contact from "./components/contact";
import NoMatch from "./components/404";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <RouteWrapper exact path="/" component={Loading} layout={LoadingPage} />
                    <RouteWrapper exact path="/home" component={Home} layout={MainLayout} />
                    <RouteWrapper exact path="/contact" component={Contact} layout={MainLayout} />
                    <RouteWrapper component={NoMatch} layout={MainLayout} />
                </Switch>
            </Router>
        </div>
    );
};

function RouteWrapper({
      component: Component,
      layout: Layout,
      ...rest
}) {
    return (
        <Route {...rest} render={(props) =>
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        } />
    );
}


export default App;
