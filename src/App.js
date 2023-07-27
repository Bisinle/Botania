import "./App.css";
import React from "react";
import BotList from "./Components/BotList";
import { createContext, useState, useEffect } from "react";
import styles from "./Components/Component-Styles/Styles.css";

export const dataContext = createContext();

function App() {
  const [botData, setBotData] = useState([]);
  useEffect(() => {
    fetch(`  http://localhost:4000/bots`)
      .then((res) => res.json())
      .then((data) => setBotData(data));
  }, []);
  const values = [botData, setBotData];
  return (
    <dataContext.Provider value={values}>
      <div className="App">
        <h1>OUR APP</h1>
        <BotList />
      </div>
    </dataContext.Provider>
  );
}

export default App;
