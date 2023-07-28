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
    // Check if the enlistBot already exists in enlistArmy
    const botExists = enlistArmy.some(
      (thisItem) => thisItem.id === enlistBot.id
    );
    //we can use enlistArmy.find(thisItem) => thisItem.id === enlistBot.id
    // );

    console.log(botExists);
    if (!botExists) {
      // If the bot doesn't exist, add it to the enlistArmy array
      setEnlistArmy((prevEnlistArmy) => [...prevEnlistArmy, enlistBot]);
    }
  }

  return (
    <div className="App">
      <BotArmy bots={enlistArmy} />
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
