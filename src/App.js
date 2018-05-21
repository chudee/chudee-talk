import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
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
        <Route path="/" component={Home} />
      </BrowserRouter>
    );
  }
}

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       rest.isLogged ? <Component {...props} /> : <Redirect to="/guest" />
//     }
//   />
// );

export default hot(module)(App);
