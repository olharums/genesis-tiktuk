import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserStore from "./store/UserStore";
import FeedStore from "./store/FeedStore";

export const Context = createContext(null);
ReactDOM.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      feed: new FeedStore(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
