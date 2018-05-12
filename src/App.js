import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Home } from "./pages";

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
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
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

export default App;
