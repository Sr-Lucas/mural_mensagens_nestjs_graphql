import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./services/history";
import api from "./services/api";
import { ApolloProvider } from "@apollo/react-hooks";

import GlobalStyles from "./styles/global";

function App() {
  return (
    <ApolloProvider client={api}>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyles />
    </ApolloProvider>
  );
}

export default App;
