import React from "react";
import "./styles/style.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { LoadingPage, MainLayout } from "./components/layout/layout";
import Loading from "./components/loadingpage/loading";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import NoMatch from "./components/404/404";
import ScrollToTop from "./components/layout/scrolltotop";

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <RouteWrapper
            exact
            path="/"
            component={Loading}
            layout={LoadingPage}
          />
          <RouteWrapper
            exact
            path="/home"
            component={Home}
            layout={MainLayout}
          />
          <RouteWrapper
            exact
            path="/about"
            component={About}
            layout={MainLayout}
          />
          <RouteWrapper
            exact
            path="/contact"
            component={Contact}
            layout={MainLayout}
          />
          <RouteWrapper component={NoMatch} layout={MainLayout} />
        </Switch>
      </Router>
    </div>
  );
};

const RouteWrapper = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default App;
