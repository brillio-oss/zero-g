import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";

import { NavBar } from "../NavBar";
import { Loading } from "../Loading";
import { createApolloClient } from "../../utils/apollo-client";
import { useAuth } from "../../auth";
import { Subscription } from "../../components/Subscription";
import { Route, Switch, Router } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import history from "../../utils/history";

export const App = ({ idToken }) => {
  const { loading, logout } = useAuth();

  if (loading || !idToken) {
    return <Loading />;
  }

  const client = createApolloClient(idToken);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <NavBar logoutHandler={logout} />
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={Subscription} />
            <Route path="/callback" exact component={Subscription} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
};
