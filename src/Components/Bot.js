import React from "react";

function Bot({ bot }) {
  //   console.log(bot);
  return (
    <div className="bot card">
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
    </div>
  );
}

export default Bot;
