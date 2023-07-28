import React, { Children, createContext } from "react";
import { useContext, useState, useEffect } from "react";

const dataContext = createContext();
function DataContextProvider({ children }) {
  const [botData, setBotData] = useState([]);
  const [showbotSpecs, setShowbotSpecs] = useState(true);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch(`  http://localhost:4000/bots`)
      .then((res) => res.json())
      .then((data) => setBotData(data))
      .finally(setisLoading(false));
  }, []);
  const values = { botData, setBotData, isLoading };
  //   console.log(botData);

  return (
    <dataContext.Provider value={values}>
      {isLoading ? <h1>Loading..</h1> : children}
    </dataContext.Provider>
  );
}

export default DataContextProvider;
export { dataContext };
