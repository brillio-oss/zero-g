import React from "react";
import { Grommet } from "grommet";

import { AuthProvider, AUTH_CONFIG } from "../../auth";
import theme from "../../utils/theme";
import history from "../../utils/history";

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

export const AuthWrapper = props => {
  return (
    <Grommet theme={theme} full>
      <AuthProvider
        domain={AUTH_CONFIG.domain}
        client_id={AUTH_CONFIG.clientId}
        redirect_uri={AUTH_CONFIG.callbackUrl}
        onRedirectCallback={onRedirectCallback}
        {...props}
      />
    </Grommet>
  );
};
