import React, { Children, createContext } from "react";
import { useContext, useState, useEffect } from "react";

const dataContext = createContext();
function DataContextProvider({ children }) {
  const [botData, setBotData] = useState([]);
  const [showbotSpecs, setShowbotSpecs] = useState(true);

  useEffect(() => {
    fetch(`  http://localhost:4000/bots`)
      .then((res) => res.json())
      .then((data) => setBotData(data));
  }, []);
  const values = { botData, setBotData };
  //   console.log(botData);

  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}

export default DataContextProvider;
export { dataContext };
