import React from "react";
import { Anchor, Box, Header, Nav, Button } from "grommet";
import history from "../../utils/history";
import { Logout } from "../Logout";

export const NavBar = ({ logoutHandler }) => {
  return (
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small">
        <Anchor color="white" href="https://zero-g.now.sh">
          Ground Zero
        </Anchor>
      </Box>
      <Nav direction="row">
        <Button
          gap="small"
          onClick={() => {
            history.push("/dashboard");
          }}
        >
          Take me to Dashboard
        </Button>
        <Logout logoutHandler={logoutHandler} />
      </Nav>
    </Header>
  );
};
