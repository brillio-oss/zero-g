import React from "react";
import { Anchor, Box, Header, Nav } from "grommet";

import { Logout } from "../Logout"

export const NavBar = ({ logoutHandler }) => {
  return (
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small">
        <Anchor color="white" href="https://zero-g.now.sh">
          Ground Zero
        </Anchor>
      </Box>
      <Nav direction="row">
        <Logout logoutHandler={logoutHandler} />
      </Nav>
    </Header>
  );
};
