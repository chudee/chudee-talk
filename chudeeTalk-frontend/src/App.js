import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home, Login, Register } from "./pages";

class App extends Component {
  state = {
    isLoaded: false,
    isLogged: false
  };

  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <Switch>
          {/* <PrivateRoute
            path="/home"
            component={Home}
            isLogged={this.state.isLogged}
          /> */}
          <Redirect exact from='/' to='/home' />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {/* <Route
            path={"/"}
            render={() =>
              this.state.isLogged ? (
                <Redirect replace to="/home" />
              ) : (
                <Redirect replace to="/login" />
              )
            }
          /> */}
        </Switch>
      );
    } else {
      return <div>is Loading...</div>;
    }
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      rest.isLogged ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default App;
