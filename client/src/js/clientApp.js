import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { RoutingApp } from "./modules";
import { AppContainer } from "react-hot-loader";
import injectTapEventPlugin from "react-tap-event-plugin";
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

// for onClick events with MUI/React
try {
  injectTapEventPlugin();
} catch (err) {
  /* hot reloading, no issue  */
}

import { VERSION } from "./versionInfo";

console.log("appVersion ->", VERSION);
const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
})

ReactDOM.render(
  <AppContainer>
    <ApolloProvider client={client}>
      <RoutingApp />
    </ApolloProvider>
    </AppContainer>,
  document.getElementById("app")
);
