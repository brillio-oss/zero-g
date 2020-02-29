import React from "react";
import { Button } from "grommet";

export const Logout = ({ logoutHandler }) => (
  <Button
    id="logoutBtn"
    primary
    onClick={logoutHandler}
  >
    Log Out
  </Button>
);
