import React from "react";
import { Outlet } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { dataContext } from "../App";

function BotArmy({ bot }) {
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [filteredBots, setFilteredBOts] = useState([]);

  const botExists = useRef();

  useEffect(() => {
    //check if the bod existsin the enlisten Army bots
    botExists.current = enlistedBots.some(
      (thisItem) => thisItem.bot_class === bot.bot_class
    );

    if (botExists.current === false) {
      // If the bot doesn't exist, add it to the enlistArmy array

      setEnlistedBots((prevEnlistArmy) => [...prevEnlistArmy, bot]);
    }
  }, [bot]);
  console.log(enlistedBots);
  //update the enlisted Army bots with the newly filteredBots after removing one
  //and watch for the reduction change in filteredBots
  useEffect(() => {
    setEnlistedBots(filteredBots);
  }, [filteredBots]);

  if (enlistedBots.length === 0) {
    return <h1>No Army yet</h1>;
  }
  function handleRemove(removingBOt) {
    // console.log(removingBOt);
    const removeAbot = enlistedBots.filter(
      (thisBOt) => removingBOt.id !== thisBOt.id
    );
    console.log(removeAbot);
    console.log(removeAbot);
    setFilteredBOts(removeAbot);

    // botExists.current = true;
    // console.log(botExists.current);
  }

  console.log();
  return (
    <div className="bot-army">
      <h1>To Baaattle !!</h1>
      {enlistedBots.map((bot) => {
        return (
          <div className="card" key={bot.id}>
            <img src={bot.avatar_url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{bot.name}</h5>
              <div className="class-catch-pharase">
                <div className="catch-phrase">
                  <h6>CatchPharase:</h6>
                  <p className="card-text">{bot.catchphrase}</p>
                </div>
                <div className="bot-class">
                  <span>
                    Class: <span id="class">{bot.bot_class}</span>
                  </span>
                  <span className="bot-icon">{}</span>
                </div>
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
            <i
              onClick={() => handleRemove(bot)}
              id="remove-from-army"
              className="fa-solid fa-x"
            ></i>
          </div>
        );
      })}
    </div>
  );
}

export default BotArmy;
