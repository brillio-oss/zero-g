import React from "react";
import { Grommet, Box, Grid } from "grommet";
import { grommet } from "grommet/themes";
import { CurrentSprintA } from "../currentSprint/currentSprintA";
import { CurrentSprintB } from "../currentSprint/currentSprintB";
import { PreviousSprintA } from "../previousSprint/previousSprintA";
import { PreviousSprintB } from "../previousSprint/previousSprintB";
import { Sidebar } from "../SideBar";
import { AllSprintsA } from "../AllSprints/AllSprintsA";
import { AllSprintsB } from "../AllSprints/AllSprintsB";
import { Route, Switch, Router } from "react-router-dom";
import history from "../../utils/history";
import { Welcome } from "../../Welcome";

export const Dashboard = () => {
  return (
    <Grommet theme={grommet}>
      <Grid
        areas={[
          { name: "nav", start: [0, 0], end: [0, 0] },
          { name: "main", start: [1, 0], end: [1, 0] }
        ]}
        columns={["20%", "flex"]}
        rows={["flex"]}
        gap="none"
      >
        <Box
          gridArea="nav"
          background="#1e3c42"
          fill="vertical"
          border={true}
          pad={{ bottom: "large" }}
        >
          <Sidebar />
        </Box>
        <Box gridArea="main" background="white">
          <Router history={history}>
            <Switch>
              <Route path="/dashboard" exact component={Welcome} />
              <Route
                path="/dashboard/boardA/currentSprint"
                exact
                component={CurrentSprintA}
              />
              <Route
                path="/dashboard/boardB/currentSprint"
                exact
                component={CurrentSprintB}
              />
              <Route
                path="/dashboard/boardA/previousSprint"
                exact
                component={PreviousSprintA}
              />
              <Route
                path="/dashboard/boardB/previousSprint"
                exact
                component={PreviousSprintB}
              />
              <Route
                path="/dashboard/boardA/allSprints"
                exact
                component={AllSprintsA}
              />
              <Route
                path="/dashboard/boardB/allSprints"
                exact
                component={AllSprintsB}
              />
            </Switch>
          </Router>
        </Box>
      </Grid>
    </Grommet>
  );
};
