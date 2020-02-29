import React from "react";
import ReactDOM from "react-dom";
import { Route, Router } from "react-router-dom";

import history from "./utils/history";
import { AuthWrapper } from "./components/AuthWrapper";

const Routes = () => {
  return (
    <Router history={history}>
      <Route path="/" render={props => <AuthWrapper {...props} />} />
    </Router>
  );
};

ReactDOM.render(<Routes />, document.getElementById("root"));
