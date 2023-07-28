import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { dataContext } from "../data/DataContextProvider";
import { useNavigate } from "react-router-dom";

export default function BotSpecs({ updateEnlistedBots }) {
  const [isClicked, setIsClicked] = useState(false);
  const { botData, setBotData, isLoading } = useContext(dataContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const botSpec = botData.find((thisBot) => thisBot.id === parseInt(id));
  // console.log(botSpec);
  if (!botSpec) {
    return <h1>Loading...</h1>;
  }

  function handleEnlist(bot) {
    // console.log(bot);
    updateEnlistedBots(bot);
    navigate(-1);
  }
  return (
    <div className="bot-specs">
      {}
      <h1>BOT-SPECS</h1>
      <div className="bot-spec-content">
        <img src={botSpec.avatar_url} className="card-img-top" alt="..." />
        <div className="bot card">
          <div className="card-body">
            <h5 className="card-title">{botSpec.name}</h5>
            <div className="catchphrase">
              <h6>CatchPharase:</h6>
              <p className="card-text">{botSpec.catchphrase}</p>
            </div>
          </div>
          <div className="icons">
            <span>
              <i className="fa-solid fa-heart-pulse"></i>
              {botSpec.health}
            </span>
            <span>
              <i className="fa-solid fa-bolt-lightning"></i>
              {botSpec.damage}
            </span>
            <span>
              <i className="fa-solid fa-shield-halved"></i>
              {botSpec.armor}
            </span>
          </div>
          <button onClick={() => handleEnlist(botSpec)}>Enlist</button>
          <button onClick={() => navigate(-1)}>Back to Colleciton</button>
        </div>
      </div>
    </div>
  );
}
