import {
  AUTH_DOMAIN,
  AUTH_CLIENT_ID,
  APP_DOMAIN,
  AUTH_CALLBACK
} from "../constants";

export { AuthContext, useAuth, AuthProvider } from "./auth";

export const AUTH_CONFIG = {
  domain: AUTH_DOMAIN,
  clientId: AUTH_CLIENT_ID,
  callbackUrl: AUTH_CALLBACK,
  afterLogout: APP_DOMAIN
};
