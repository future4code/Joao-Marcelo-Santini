import React from "react";
import { ConnectedRouter, routerActions } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import Home from "../Home/index";




export const routes = {
  home: "/",
  login: "/login"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path= {router.home} component={Home} />
        <Route path={routes.login} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
