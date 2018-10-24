import React from "react";
import ReactDOM from "react-dom";

// redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducer";

import "antd/dist/antd.css";
import "./styles.css";

import Demo from "./demo";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Demo />
  </Provider>,
  rootElement
);
