import React from "react";
import { useContext, useState, useEffect } from "react";
import Bot from "./Bot";
import BotSpecs from "./BotSpecs";
import { dataContext } from "../data/DataContextProvider";
import { Link } from "react-router-dom";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";
function BotList({ sortValueState }) {
  const { botData, setBotData, isLoading } = useContext(dataContext);
  const [filteredBotSatate, setFilteredBotSatate] = useState([]);
  const [filterObjectFromForm, setFilterObjectFromForm] = useState({});
  // console.log(sortValueState);
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

  function handleFilter(filterClasses) {
    const { Support, Medic, Assault, Defender, Captain, Witch } = filterClasses;
    // console.log(Support, Medic, Assault, Defender, Captain, Witch);
    // console.log(filteredData);
    const filteredData = sortedBotData.filter((thisBot) => {
      if (Support && Medic && Assault && Defender && Captain && Witch) {
        return (
          thisBot.bot_class === Support ||
          thisBot.bot_class === Medic ||
          thisBot.bot_class === Assault ||
          thisBot.bot_class === Witch ||
          thisBot.bot_class === Captain ||
          thisBot.bot_class === Defender
        );
      } else if (Support || Medic || Assault || Defender || Captain || Witch) {
        return (
          thisBot.bot_class === Support ||
          thisBot.bot_class === Medic ||
          thisBot.bot_class === Assault ||
          thisBot.bot_class === Witch ||
          thisBot.bot_class === Captain ||
          thisBot.bot_class === Defender
        );
      } else if (Support && Witch) {
        return thisBot.bot_class === Support || thisBot.bot_class === Witch;
      } else if (Support) {
        return thisBot.bot_class === Support;
      } else if (Medic) {
        return thisBot.bot_class === Medic;
      } else if (Defender) {
        return thisBot.bot_class === Defender;
      } else if (Witch) {
        return thisBot.bot_class === Witch;
      } else if (Assault) {
        return thisBot.bot_class === Assault;
      } else if (Captain) {
        return thisBot.bot_class === Captain;
      }
    });
    // console.log(filteredData);
    setFilteredBotSatate(filteredData);
    setFilterObjectFromForm(filterClasses);
    // console.log(filterObjectFromForm);
  }
  // console.log(filterObjectFromForm);

  function isNotValueEmpty(value) {
    return !value === "";
  }
  function isValueEmpty(value) {
    return value === "";
  }
  // console.log(filteredBotSatate);
  // console.log(filterObjectFromForm);
  // console.log(Object.values(filterObjectFromForm));
  //map Through the filtered data
  const filteredBotSatateMapping = filteredBotSatate.map((bot) => (
    <Link key={bot.id} to={`botSpecs/${bot.id}`}>
      <Bot bot={bot} />
    </Link>
  ));
  return (
    <div className="bot">
      {isLoading ? <h1>Loading...</h1> : <h1>BOT COLLECTION</h1>}
      <div className="sort-Filter">
        <FilterBar onSubmitHandle={handleFilter} />
        <SortBar onSortChange={handleSortChange} />
      </div>
      <div className="collection">
        {Object.keys(filterObjectFromForm).length === 0 ||
        Object.values(filterObjectFromForm).some((value) =>
          isNotValueEmpty(value)
        )
          ? sortedBotData.map((bot) => (
              <Link key={bot.id} to={`botSpecs/${bot.id}`}>
                <Bot bot={bot} />
              </Link>
            ))
          : filteredBotSatateMapping}
      </div>
    </div>
  );
}

export default BotList;
