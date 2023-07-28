import React from "react";
import { Outlet } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { dataContext } from "../App";

function BotArmy({ bot }) {
  // const [enlistedBots, setEnlistedBots] = useState([]);
  // console.log(bot);
  // if (bot.length === 0) {
  //   return <h1>No Army yet</h1>;
  // }
  // return (
  //   <div className="bot-army">
  //     {bot.map((bot) => (
  //       <div className="card">
  //         <img src={bot.avatar_url} className="card-img-top" alt="..." />
  //         <div className="card-body">
  //           <h5 className="card-title">{bot.name}</h5>
  //           <div className="catchphrase">
  //             <p className="card-text">{bot.catchphrase}</p>
  //           </div>
  //         </div>
  //         <div className="icons">
  //           <span>
  //             <i className="fa-solid fa-heart-pulse"></i>
  //             {bot.health}
  //           </span>
  //           <span>
  //             <i className="fa-solid fa-bolt-lightning"></i>
  //             {bot.damage}
  //           </span>
  //           <span>
  //             <i className="fa-solid fa-shield-halved"></i>
  //             {bot.armor}
  //           </span>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
}

export default BotArmy;
