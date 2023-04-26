import ReactDOM from "react-dom";
import React from "react";
import App from "./app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";
import reducers from "./redux/reducers.js";
import { createRoot } from 'react-dom/client';
const middleWare = [Thunk];
const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middleWare),
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      function (f) {
        return f;
      }
  )
);



const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);