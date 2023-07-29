import React from "react";
import { useState, useEffect } from "react";

function Bot({ bot }) {
  //   console.log(bot);
  const [classICon, setClassICon] = useState(null);

  useEffect(() => {
    if (bot.bot_class === "Support") {
      setClassICon(<i className="fa-solid fa-person-running"></i>);
    } else if (bot.bot_class === "Medic") {
      setClassICon(<i className="fa-solid fa-truck-medical"></i>);
    } else if (bot.bot_class === "Assault") {
      setClassICon(<i className="fa-solid fa-jet-fighter"></i>);
    } else if (bot.bot_class === "Defender") {
      setClassICon(<i className="fa-solid fa-shield-halved"></i>);
    } else if (bot.bot_class === "Witch") {
      setClassICon(<i className="fa-solid fa-broom"></i>);
    } else if (bot.bot_class === "Captain") {
      setClassICon(<i className="fa-solid fa-person-military-pointing"></i>);
    }
  }, [bot]);

  return (
    <div className="bot card">
      <img src={bot.avatar_url} className="card-img-top" alt="..." />
      <div className="card-body">
        <div className="title-icon">
          <h5 className="card-title">{bot.name}</h5>
          <span>{classICon}</span>
        </div>
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
    </div>
  );
}

export default Bot;
