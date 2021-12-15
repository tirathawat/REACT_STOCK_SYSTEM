import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducers from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

function getMiddleware(): any {
  if (process.env.REACT_APP_IS_PRODUCTION === "1") {
    return applyMiddleware(thunk);
  } else {
    return applyMiddleware(thunk, logger);
  }
}

const middleware = getMiddleware();

const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
