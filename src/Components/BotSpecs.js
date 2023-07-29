import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../data/DataContextProvider";
import { useNavigate } from "react-router-dom";

export default function BotSpecs({ updateEnlistedBots }) {
  const [isClicked, setIsClicked] = useState(false);
  const [classICon, setClassICon] = useState(null);
  const { botData, deleteBotCard } = useContext(dataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const botSpec = botData.find((thisBot) => thisBot.id === parseInt(id));

  useEffect(() => {
    if (botData.length > 0) {
      if (botSpec) {
        // Logic to set the classICon based on the bot_class value
        switch (botSpec.bot_class) {
          case "Support":
            setClassICon(<i className="fa-solid fa-person-running"></i>);
            break;
          case "Medic":
            setClassICon(<i className="fa-solid fa-truck-medical"></i>);
            break;
          case "Assault":
            setClassICon(<i className="fa-solid fa-jet-fighter"></i>);
            break;
          case "Defender":
            setClassICon(<i className="fa-solid fa-shield-halved"></i>);
            break;
          case "Witch":
            setClassICon(<i className="fa-solid fa-broom"></i>);
            break;
          case "Captain":
            setClassICon(
              <i className="fa-solid fa-person-military-pointing"></i>
            );
            break;
          default:
            setClassICon(null);
        }
      }
    }
  }, [botData]);

  if (!botSpec) {
    return <h1>Loading...</h1>;
  }

  function handleEnlist(bot) {
    updateEnlistedBots(bot);
    navigate(-1);
  }

  function cardDeleteHandle(e) {
    const { id } = e.target;
    // console.log();
    deleteBotCard(parseInt(id));
    navigate(-1);
  }

  return (
    <div className="bot-specs">
      <h1>BOT-SPECS</h1>
      <div className="bot-spec-content">
        <img src={botSpec.avatar_url} className="card-img-top" alt="..." />
        <div className="bot card">
          <div className="card-body">
            <i
              id={botSpec.id}
              onClick={cardDeleteHandle}
              className="fa-solid fa-trash-can delete-card"
            ></i>

            <h5 className="card-title">{botSpec.name}</h5>
            <div className="class-catch-pharase">
              <div className=" bot-spec catch-phrase">
                <h6>CatchPharase:</h6>
                <p className="card-text">{botSpec.catchphrase}</p>
              </div>
              <div className="bot-class">
                <span>
                  Class: <span id="class">{botSpec.bot_class}</span>
                </span>
                <span className="bot-icon">{classICon}</span>
              </div>
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

          <div className="btn">
            <button onClick={() => handleEnlist(botSpec)}>Enlist</button>
            <button onClick={() => navigate(-1)}>Back to Collection</button>
          </div>
        </div>
      </div>
    </div>
  );
}
