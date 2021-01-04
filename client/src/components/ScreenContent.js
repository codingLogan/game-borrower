import { useEffect, useState } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import Borrowers from "./Borrowers";
import Games from "./Games";
import Landing from "./Landing";

function ScreenContent({ navItems, setNavItems }) {
  return (
    <>
      <Switch>
        <Route path="/borrowers">
          <Borrowers />
        </Route>
        <Route path="/games">
          <Games navItems={navItems} setNavItems={setNavItems} />
        </Route>
        <Route path="/">
          <Landing navItems={navItems} setNavItems={setNavItems} />
        </Route>
      </Switch>
    </>
  );
}

export default ScreenContent;
