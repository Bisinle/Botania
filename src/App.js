import "./App.css";
import React from "react";
//Context and Hooks
import { useContext, useState, useEffect } from "react";
import styles from "./Components/Component-Styles/Styles.css";
//Components
import BotSpecs from "./Components/BotSpecs";
import BotList from "./Components/BotList";
//Rountes
import { Route, Routes } from "react-router-dom";
import Bot from "./Components/Bot";
import BotArmy from "./Components/BotArmy";
import SortBar from "./Components/SortBar";
import NavBar from "./Components/NavBar";
function App() {
  const [enlistArmy, setEnlistArmy] = useState([]);
  const [sortValueState, setSortValueState] = useState("");
  const [armyIconState, setArmyIconState] = useState(null);

  const [updatedWithObjectFromSpecs, setUpdatedWithObjectFromSpecs] = useState(
    {}
  );
  useEffect(() => {
    if (updatedWithObjectFromSpecs) {
      // Logic to set the classICon based on the bot_class value
      switch (updatedWithObjectFromSpecs.bot_class) {
        case "Support":
          setArmyIconState(<i className="fa-solid fa-person-running"></i>);
          break;
        case "Medic":
          setArmyIconState(<i className="fa-solid fa-truck-medical"></i>);
          break;
        case "Assault":
          setArmyIconState(<i className="fa-solid fa-jet-fighter"></i>);
          break;
        case "Defender":
          setArmyIconState(<i className="fa-solid fa-shield-halved"></i>);
          break;
        case "Witch":
          setArmyIconState(<i className="fa-solid fa-broom"></i>);
          break;
        case "Captain":
          setArmyIconState(
            <i className="fa-solid fa-person-military-pointing"></i>
          );
          break;
        default:
          setArmyIconState(null);
      }
    }
  }, [enlistArmy]);

  //updatedWithObjectFromSpecs = UWOFS
  function getClickedCardObjectForUWOFS(cardObject) {
    console.log(cardObject);
  }

  function updateEnlistedBots(enlistBot) {
    setUpdatedWithObjectFromSpecs(enlistBot);
    setEnlistArmy(enlistBot);
  }
  function getSortValues(sortValue) {
    // console.log(sortValue);
    setSortValueState(sortValue);
  }

  return (
    <div className="App">
      <NavBar />
      <BotArmy bot={enlistArmy} />
      <Routes>
        <Route
          path="/"
          element={
            <BotList
              getSortValues={getSortValues}
              onCardClikToApp={getClickedCardObjectForUWOFS}
              sortValueState={sortValueState}
            />
          }
        />
        <Route
          path="botSpecs/:id"
          element={<BotSpecs updateEnlistedBots={updateEnlistedBots} />}
        />
      </Routes>
    </div>
  );
}

export default App;
