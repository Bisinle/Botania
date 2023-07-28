import React from "react";
import { useContext, useState, useEffect } from "react";
import Bot from "./Bot";
import BotSpecs from "./BotSpecs";
import { dataContext } from "../data/DataContextProvider";
import { Link } from "react-router-dom";
function BotList() {
  const { botData, setBotData, isLoading } = useContext(dataContext);
  // console.log(botData);

  const botItem = botData.map((bot) => (
    <Link key={bot.id} to={`botSpecs/${bot.id}`}>
      <Bot bot={bot} />
    </Link>
  ));
  return (
    <div className="bot">
      {isLoading ? <h1>Loading...</h1> : <h1>BOT COLLECTION</h1>}
      {botItem}
    </div>
  );
}

export default BotList;
