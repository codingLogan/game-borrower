import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Landing({ navItems, setNavItems }) {
  const history = useHistory();

  useEffect(() => {
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
    setNavItems({
      activeIndex: 0,
      items: initialItems,
    });
  }, [setNavItems, history]);

  return (
    <>
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
    </>
  );
}

export default Landing;
