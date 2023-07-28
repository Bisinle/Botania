import React from "react";
import { Outlet } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { dataContext } from "../App";

function BotArmy({ bots }) {
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [filteredBots, setFilteredBOts] = useState([]);
  const botExists = useRef();

  useEffect(() => {
    botExists.current = enlistedBots.some(
      (thisItem) => thisItem.bot_class === bots.bot_class
    );

    if (botExists.current === false) {
      // If the bot doesn't exist, add it to the enlistArmy array
      setEnlistedBots((prevEnlistArmy) => [...prevEnlistArmy, bots]);
    }
  }, [bots]);
  // console.log(enlistedBots);

  useEffect(() => {
    setEnlistedBots(filteredBots);
  }, [filteredBots]);

  // console.log(bot);
  if (enlistedBots.length === 0) {
    return <h1>No Army yet</h1>;
  }
  function handleRemove(removingBOt) {
    console.log(removingBOt);
    const removeAbot = enlistedBots.filter(
      (thisBOt) => removingBOt.id !== thisBOt.id
    );
    console.log(removeAbot);
    console.log(removeAbot);
    setFilteredBOts(removeAbot);

    // botExists.current = true;
    // console.log(botExists.current);
  }
  return (
    <div className="bot-army">
      <h1>To Battle !!</h1>
      {enlistedBots.map((bot) => (
        <div className="card" key={bot.id}>
          <img src={bot.avatar_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{bot.name}</h5>
            <div className="catchphrase">
              <p className="card-text">{bot.catchphrase}</p>
            </div>
          </div>
          <div className="icons">
            <span>
              <i className="fa-solid fa-heart-pulse"></i>
              {bot.health}
            </span>
            <span>
              <i className="fa-solid fa-bolt-lightning"></i>
              {bot.damage}
            </span>
            <span>
              <i className="fa-solid fa-shield-halved"></i>
              {bot.armor}
            </span>
          </div>
          <button onClick={() => handleRemove(bot)}>remove</button>
        </div>
      ))}
    </div>
  );
}

export default BotArmy;
