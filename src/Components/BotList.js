import React from "react";
import { useContext } from "react";
import { dataContext } from "../App";
import Bot from "./Bot";

function BotList() {
  const [botData, setBotData] = useContext(dataContext);
  console.log(botData);

  const botItem = botData.map((bot) => (
    <span key={bot.id}>
      <Bot bot={bot} />
    </span>
  ));
  return <div className="bot">{botItem}</div>;
}

export default BotList;
