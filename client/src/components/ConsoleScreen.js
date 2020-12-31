import { useHistory } from "react-router-dom";
import "./ConsoleScreen.css";
import ScreenContent from "./ScreenContent";
import ActionButton from "./ActionButton";
import MenuButton from "./MenuButton";
import DPad from "./DPad";
import { useState } from "react";

function ConsoleScreen() {
  const history = useHistory();

  // Up Down Left and Right will navigate through these items
  // All navigation items need to set actions for the action buttons
  const [navItems, setNavItems] = useState({ activeIndex: null, items: [] });

  const acceptHandler = function () {
    console.log("accept fired");
    // Get active item
    if (navItems.items.length > 0) {
      navItems.items[navItems.activeIndex]?.accept();
    }
  };

  // Navigate "back" with the B button
  const backHandler = function () {
    console.log("back fired");
    history.goBack();
  };

  const downHandler = function () {
    console.log("down fired", navItems);

    // Check nav items and move index up if we can
    console.log(navItems.activeIndex, navItems.items.length);
    if (navItems.activeIndex < navItems.items.length - 1) {
      console.log("changing props");
      setNavItems({
        items: navItems.items,
        activeIndex: navItems.activeIndex + 1,
      });
    }
  };

  const upHandler = function () {
    // Check nav items and move index down if we can
    console.log(navItems.activeIndex, navItems.items.length);
    if (navItems.activeIndex > 0) {
      console.log("changing props");
      setNavItems({
        items: navItems.items,
        activeIndex: navItems.activeIndex - 1,
      });
    }
  };

  return (
    <div id="console">
      <div className="console_screen">
        <div className="console_screen-display">
          <ScreenContent navItems={navItems} setNavItems={setNavItems} />
        </div>
      </div>
      <div className="console_buttons">
        <DPad
          id="console_directions"
          downHandler={downHandler}
          upHandler={upHandler}
        />
        <div className="AB_buttons">
          <ActionButton
            id="console_accept"
            type="circle"
            clickHandler={acceptHandler}
          />
          <ActionButton
            id="console_back"
            type="circle"
            clickHandler={backHandler}
          />
        </div>
      </div>
      <div id="menu_buttons">
        <MenuButton id="console_select" />
        <MenuButton id="console_start" />
      </div>
    </div>
  );
}

export default ConsoleScreen;
