import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./api/client/client";
import { getChildArray } from "./helpers/getChildArray";
import { getSelectedItem } from "./helpers/getSelectedItem";
export const HelpersContext = React.createContext({
  getChildArray,
  getSelectedItem,
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HelpersContext.Provider value={{ getChildArray, getSelectedItem }}>
        <App />
      </HelpersContext.Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
