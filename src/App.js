import React from "react";
import "./styles/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoadingPage, MainLayout } from "./components/layout/layout";
import Loading from "./components/loadingpage/loading";
import Home from "./components/home/home";
import Contact from "./components/contact/contact";
import NoMatch from "./components/404/404";

const App = () => {
  return (
    <div className="App">
      <Router>
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
