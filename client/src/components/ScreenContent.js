import { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Borrowers from "./Borrowers";
import Games from "./Games";

function ScreenContent() {
  const [borrowers, setBorrowers] = useState([]);

  return (
    <>
      <Switch>
        <Route path="/borrowers">
          <Borrowers />
        </Route>
        <Route path="/games">
          <Games />
        </Route>
        <Route path="/">
          <p>
            <strong>Games Inventory</strong>
          </p>
          <Link to="/games">View Games</Link>
          <Link to="/borrowers">Borrowers</Link>
        </Route>
      </Switch>
    </>
  );
}

export default ScreenContent;
