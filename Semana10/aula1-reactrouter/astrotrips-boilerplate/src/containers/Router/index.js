import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import Home from "../Home/index";
import Viagens from "../Viagens/index";
import Inscricao from "..//Inscricao/index";




export const routes = {
  home: "/",
  login : "/login",
  viagens: "/viagens",
  inscricao: "/inscricao"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.home} component={Home}/>
        <Route exact path={routes.login} component={LoginPage}/>
        <Route exact path={routes.viagens} component={Viagens}/>
        <Route exact path={routes.inscricao} component={Inscricao}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
