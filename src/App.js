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
function App() {
  const [enlistArmy, setEnlistArmy] = useState([]);
  function updateEnlistedBots(enlistBot) {
    // console.log(enlistedBots);

    setEnlistArmy((prev) => [...prev, enlistBot]);
  }

  return (
    <div className="App">
      <BotArmy bot={enlistArmy} />
      <Routes>
        <Route path="/" element={<BotList />} />
        <Route
          path="botSpecs/:id"
          element={<BotSpecs updateEnlistedBots={updateEnlistedBots} />}
        />
      </Routes>
    </div>
  );
}

export default App;
