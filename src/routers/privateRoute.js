import React from "react";
import { Route, Redirect } from "react-router-dom";

const checkAuth = () => {
  const _isAuth = localStorage.getItem("authToken");
  if (_isAuth) return true;
  else return false;
};
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
      checkAuth() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
