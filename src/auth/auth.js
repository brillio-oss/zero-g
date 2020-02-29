import React, { useState, useEffect, useContext } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";

import { Loading } from "../components/Loading";
import { Login } from "../components/Login";
import { App } from "../components/App";

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [authClient, setAuth] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const [idToken, setIdToken] = useState("");

  useEffect(() => {
    const initAuth = async () => {
      const authFromHook = await createAuth0Client(initOptions);
      setAuth(authFromHook);

      if (window.location.search.includes("code=")) {
        const { appState } = await authFromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await authFromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await authFromHook.getUser();
        setUser(user);
        const idTokenClaims = await authFromHook.getIdTokenClaims();
        setIdToken(idTokenClaims.__raw);
      }

      setLoading(false);
    };
    initAuth();
    // eslint-disable-next-line
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await authClient.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await authClient.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    const result = await authClient.handleRedirectCallback();
    const user = await authClient.getUser();
    const idTokenClaims = await authClient.getIdTokenClaims();
    setIdToken(idTokenClaims.__raw);

    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
    return result;
  };

  if (loading) {
    return <Loading />;
  }

  const authValue = {
    isAuthenticated,
    user,
    loading,
    popupOpen,
    loginWithPopup,
    handleRedirectCallback,
    getIdTokenClaims: (...p) => authClient.getIdTokenClaims(...p),
    loginWithRedirect: (...p) => authClient.loginWithRedirect(...p),
    getTokenSilently: (...p) => authClient.getTokenSilently(...p),
    getTokenWithPopup: (...p) => authClient.getTokenWithPopup(...p),
    logout: (...p) => authClient.logout(...p)
  };

  if (!isAuthenticated) {
    return (
      <AuthContext.Provider value={authValue}>
        <Login />
      </AuthContext.Provider>
    );
  }

  return (
    <AuthContext.Provider value={authValue}>
      {children}
      <App idToken={idToken} />
    </AuthContext.Provider>
  );
};
