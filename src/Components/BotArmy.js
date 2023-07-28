import React from "react";
import { Outlet } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { dataContext } from "../App";

function BotArmy({ bots }) {
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [filteredBots, setFilteredBOts] = useState([]);
  useEffect(() => {
    setEnlistedBots(bots);
  }, [bots]);
  useEffect(() => {
    setEnlistedBots(filteredBots);
    console.log(filteredBots);
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
    setFilteredBOts(removeAbot);
  }
  return (
    <div className="bot-army">
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
