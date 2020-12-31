import { useEffect, useState } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import Borrowers from "./Borrowers";
import Games from "./Games";

function ScreenContent({ navItems, setNavItems }) {
  const history = useHistory();

  const initialItems = [
    {
      to: "/games",
      text: "View Games",
      accept: function () {
        history.push("/games");
      },
    },
    {
      to: "/borrowers",
      text: "Borrowers",
      accept: function () {
        history.push("/borrowers");
      },
    },
  ];

  useEffect(() => {
    setNavItems({
      activeIndex: 0,
      items: initialItems,
    });
  }, []);

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
          {navItems.items.map((item, index) => (
            <Link
              className={navItems.activeIndex === index ? "active_item" : ""}
              to={item.to}
            >
              {item.text}
            </Link>
          ))}
        </Route>
      </Switch>
    </>
  );
}

export default ScreenContent;
