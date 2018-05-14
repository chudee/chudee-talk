import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { hot } from "react-hot-loader";

import { Home } from "./pages";
import { Friends, Chatting, More } from "./templates";

class App extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Switch>
            <Route component={NoMatch} />
          </Switch>
        </Switch>
      </BrowserRouter>
    );
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       rest.isLogged ? <Component {...props} /> : <Redirect to="/guest" />
//     }
//   />
// );

export default hot(module)(App);
