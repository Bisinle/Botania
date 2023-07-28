import React from "react";
import { useContext, useState, useEffect } from "react";
import Bot from "./Bot";
import BotSpecs from "./BotSpecs";
import { dataContext } from "../data/DataContextProvider";
import { Link } from "react-router-dom";
import SortBar from "./SortBar";
function BotList({ sortValueState }) {
  const { botData, setBotData, isLoading } = useContext(dataContext);
  console.log(sortValueState);
  const [sortValue, setSortValue] = useState();

  const botItem = botData.map((bot) => (
    <Link key={bot.id} to={`botSpecs/${bot.id}`}>
      <Bot bot={bot} />
    </Link>
  ));
  function handleSortChange(sortValueFromSortBar) {
    setSortValue(sortValueFromSortBar);
  }
  // Function to sort the botData based on the selected sortValue
  const sortedBotData = botData.sort((a, b) => {
    if (sortValue === "Health") {
      return b.health - a.health;
    } else if (sortValue === "Damage") {
      return b.damage - a.damage;
    } else if (sortValue === "Armor") {
      return b.armor - a.armor;
    }

    // If "All" or unknown sortValue, no sorting required
    return 0;
  });

  return (
    <div className="bot">
      {isLoading ? <h1>Loading...</h1> : <h1>BOT COLLECTION</h1>}
      <SortBar onSortChange={handleSortChange} />
      {sortedBotData.map((bot) => (
        <Link key={bot.id} to={`botSpecs/${bot.id}`}>
          <Bot bot={bot} />
        </Link>
      ))}
    </div>
  );
}

export default BotList;

// {sortValueState === " Sort By"
// ? botItem
// : botItem.sort((a, b) => {
//     if (sortValueState === "Health") {
//       return b.health - a.health;
//     }
//   })}
