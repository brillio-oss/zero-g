import React from "react";
import { Box, Button, Heading, Text } from "grommet";

import { useAuth } from "../../auth";
import { Loading } from "../Loading";

export const Login = () => {
  const { loading, loginWithRedirect } = useAuth();

  const handleRedirect = () => loginWithRedirect({});

  if (loading) {
    return <Loading />;
  }

  return (
    <Box justify="center" align="center" background="brand" fill>
      <Heading>Welcome to Ground Zero</Heading>
      <Text align="center">Please login to continue</Text>
      <Box align="center" pad="medium">
        <Button id="loginBtn" primary color="#0D0221" onClick={handleRedirect} label="Log In" />
      </Box>
    </Box>
  );
};
