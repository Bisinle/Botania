import React, { Children, createContext } from "react";
import { useContext, useState, useEffect } from "react";

const dataContext = createContext();
function DataContextProvider({ children }) {
  const [botData, setBotData] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [deleteBotState, setDeleteBotState] = useState("");

  useEffect(() => {
    fetch(`  https://botania-server.onrender.com/bots`)
      .then((res) => res.json())
      .then((data) => setBotData(data));
  }, [deleteBotState, isDeleted]);

  function deleteBotCard(id) {
    console.log(id);
    fetch(`  https://botania-server.onrender.com/bots/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setDeleteBotState(data))
      .finally(setIsDeleted(true));
  }

  const values = { botData, setBotData, deleteBotCard };
  console.log(botData);
  return <dataContext.Provider value={values}>{children}</dataContext.Provider>;
}

export default DataContextProvider;
export { dataContext };
