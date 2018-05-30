import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import baseStyles from "./styles";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./redux/reducers";
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
);

const render = () => {
  baseStyles();
  ReactDom.render(<Root />, document.getElementById("root"));
};

render();
