import React from "react";
import { Switch, Route } from "react-router-dom";
import ErrorComponent from "../components/Error";
import routes from "./route";

export function NotFound() {
  return (
    <Status code={404}>
      <div />
    </Status>
  );
}

function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code;
        }
        return children;
      }}
    />
  );
}

export function routeIndexes() {
  return routes;
}

export function serviceRouter(ssr = true, errorStatus = null) {
  return () => (
    <Switch>
      {errorStatus && <ErrorComponent />}
      {routeIndexes().map((route, index) => <Route key={index} {...route} />)}
      {ssr ? <Route component={NotFound} /> : <ErrorComponent />}
    </Switch>
  );
}
