import React from "react";


function Bot({ bot }) {
  console.log(bot);
  return (
    <div class="bot card">
      <img src={bot.avatar_url} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{bot.name}</h5>
        <div className="catchphrase">
          <p class="card-text">{bot.catchphrase}</p>
        </div>
      </div>
      <div className="icons">
        <span>
          <i class="fa-solid fa-heart-pulse"></i>
          {bot.health}
        </span>
        <span>
          <i class="fa-solid fa-bolt-lightning"></i>
          {bot.damage}
        </span>
        <span>
          <i class="fa-solid fa-shield-halved"></i>
          {bot.armor}
        </span>
      </div>
    </div>
  );
}

export default Bot;
